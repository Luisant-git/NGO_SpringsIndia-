import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiResponse({ status: 201, description: 'Blog created successfully' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Empowering Rural Communities' },
        content: { type: 'string', example: 'Our latest initiative focuses on...' },
        excerpt: { type: 'string', example: 'A brief summary of our community work' },
        author: { type: 'string', example: 'Springs India Foundation' },
        category: { type: 'string', example: 'Education' },
        readTime: { type: 'string', example: '5 min read' },
        published: { type: 'boolean', example: true },
        image: { type: 'string', format: 'binary' }
      }
    }
  })
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  create(@Body() createBlogDto: CreateBlogDto, @UploadedFile() file: Express.Multer.File) {
    return this.blogService.create(createBlogDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all published blogs' })
  @ApiResponse({ 
    status: 200, 
    description: 'List of blogs',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          title: { type: 'string', example: 'Empowering Rural Communities' },
          excerpt: { type: 'string', example: 'A brief summary...' },
          author: { type: 'string', example: 'Springs India Foundation' },
          category: { type: 'string', example: 'Education' },
          readTime: { type: 'string', example: '5 min read' },
          published: { type: 'boolean', example: true },
          publishedAt: { type: 'string', example: '2024-01-15T10:30:00Z' }
        }
      }
    }
  })
  findAll(@Query('published') published?: string) {
    return this.blogService.findAll(published === 'true');
  }

  @Get('admin')
  findAllAdmin() {
    return this.blogService.findAllAdmin();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get blog by ID' })
  @ApiResponse({ status: 200, description: 'Blog details' })
  @ApiResponse({ status: 404, description: 'Blog not found' })
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto, @UploadedFile() file?: Express.Multer.File) {
    // Manual transformation for published field
    if (updateBlogDto.published !== undefined) {
      const publishedValue = updateBlogDto.published;
      let transformedValue = false;
      
      if (publishedValue === 'true' || publishedValue === true) {
        transformedValue = true;
      } else if (publishedValue === 'false' || publishedValue === false) {
        transformedValue = false;
      }
      
      updateBlogDto.published = transformedValue;
    }
    return this.blogService.update(+id, updateBlogDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}