import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateImpactYearDto } from './dto/create-impact-year.dto';
import { UpdateImpactYearDto } from './dto/update-impact-year.dto';

@Injectable()
export class ImpactYearService {
  private prisma = new PrismaClient();

  create(createImpactYearDto: CreateImpactYearDto) {
    return this.prisma.impactYear.create({
      data: createImpactYearDto,
    });
  }

  findAll() {
    return this.prisma.impactYear.findMany({
      include: { 
        impactMonths: {
          orderBy: [{ monthNumber: 'asc' }, { createdAt: 'asc' }]
        }
      },
      orderBy: [{ toYear: 'desc' }, { toMonth: 'asc' }],
    });
  }

  findOne(id: number) {
    return this.prisma.impactYear.findUnique({
      where: { id },
      include: { impactMonths: true },
    });
  }

  update(id: number, updateImpactYearDto: UpdateImpactYearDto) {
    return this.prisma.impactYear.update({
      where: { id },
      data: updateImpactYearDto,
    });
  }

  remove(id: number) {
    return this.prisma.impactYear.delete({
      where: { id },
    });
  }
}