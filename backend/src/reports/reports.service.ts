import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, file: Express.Multer.File) {
    return this.prisma.report.create({
      data: {
        title: data.title,
        type: data.type,
        year: data.year,
        filePath: file.path,
        fileName: file.filename,
        fileSize: file.size,
        published: data.published === 'true' || data.published === true,
      },
    });
  }

  async findAll() {
    return this.prisma.report.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findPublished() {
    return this.prisma.report.findMany({
      where: { published: true },
      orderBy: { year: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.report.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.report.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.report.delete({
      where: { id },
    });
  }

  async createTestReport() {
    return this.prisma.report.create({
      data: {
        title: 'Annual Report 2024',
        type: 'annual',
        year: '2024',
        filePath: '/test/path/report.pdf',
        fileName: 'annual-report-2024.pdf',
        fileSize: 1024,
        published: true,
      },
    });
  }
}