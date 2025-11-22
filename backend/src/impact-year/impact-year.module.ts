import { Module } from '@nestjs/common';
import { ImpactYearService } from './impact-year.service';
import { ImpactYearController } from './impact-year.controller';

@Module({
  controllers: [ImpactYearController],
  providers: [ImpactYearService],
})
export class ImpactYearModule {}
