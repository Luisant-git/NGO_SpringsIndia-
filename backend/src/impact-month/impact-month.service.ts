import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateImpactMonthDto } from './dto/create-impact-month.dto';
import { UpdateImpactMonthDto } from './dto/update-impact-month.dto';

@Injectable()
export class ImpactMonthService {
  private prisma = new PrismaClient();

  create(createImpactMonthDto: CreateImpactMonthDto) {
    return this.prisma.impactMonth.create({
      data: createImpactMonthDto,
      include: { impactYear: true },
    });
  }

  findAll() {
    return this.prisma.impactMonth.findMany({
      include: { impactYear: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.impactMonth.findUnique({
      where: { id },
      include: { impactYear: true },
    });
  }

  findByYear(yearId: number) {
    return this.prisma.impactMonth.findMany({
      where: { impactYearId: yearId, isActive: true },
      include: { impactYear: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  update(id: number, updateImpactMonthDto: UpdateImpactMonthDto) {
    return this.prisma.impactMonth.update({
      where: { id },
      data: updateImpactMonthDto,
      include: { impactYear: true },
    });
  }

  remove(id: number) {
    return this.prisma.impactMonth.delete({
      where: { id },
    });
  }
}