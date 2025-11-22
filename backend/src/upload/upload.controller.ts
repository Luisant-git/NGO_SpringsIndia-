import { Controller, Post, UseInterceptors, UploadedFiles, BadRequestException } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  @Post('images')
  @ApiOperation({ summary: 'Upload images (max 3)' })
  @ApiResponse({ 
    status: 201, 
    description: 'Images uploaded successfully',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Images uploaded successfully' },
        files: { 
          type: 'array', 
          items: { type: 'string' },
          example: ['1234567890-image1.jpg', '1234567891-image2.png']
        }
      }
    }
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid file type or no files' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload up to 3 image files',
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary'
          },
          maxItems: 3,
          description: 'Image files (jpg, jpeg, png, gif) - max 5MB each'
        }
      }
    }
  })
  @UseInterceptors(
    FilesInterceptor('images', 3, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new BadRequestException('Only image files are allowed'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    }),
  )
  uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded');
    }

    const filePaths = files.map(file => file.filename);
    return {
      message: 'Images uploaded successfully',
      files: filePaths,
    };
  }
}