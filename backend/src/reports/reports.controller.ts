import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/reports',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
          cb(null, true);
        } else {
          cb(new Error('Only PDF files are allowed'), false);
        }
      },
    }),
  )
  create(@Body() createReportDto: any, @UploadedFile() file: Express.Multer.File) {
    return this.reportsService.create(createReportDto, file);
  }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Get('test')
  test() {
    return { message: 'Reports API is working', timestamp: new Date() };
  }

  @Post('create-test')
  async createTest() {
    try {
      const report = await this.reportsService.createTestReport();
      return { message: 'Test report created', report };
    } catch (error) {
      console.error('Error creating test report:', error);
      return { error: error.message };
    }
  }

  @Get('published')
  async findPublished() {
    try {
      console.log('Fetching published reports...');
      const reports = await this.reportsService.findPublished();
      console.log('Found reports:', reports.length, 'reports');
      return reports;
    } catch (error) {
      console.error('Error in findPublished:', error);
      throw error;
    }
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateReportDto: any) {
    return this.reportsService.update(id, updateReportDto);
  }

  @Get(':id/download')
  async download(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const report = await this.reportsService.findOne(id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    return res.download(report.filePath, report.fileName);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reportsService.remove(id);
  }
}