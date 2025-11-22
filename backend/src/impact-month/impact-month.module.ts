import { Module } from '@nestjs/common';
import { ImpactMonthService } from './impact-month.service';
import { ImpactMonthController } from './impact-month.controller';

@Module({
  controllers: [ImpactMonthController],
  providers: [ImpactMonthService],
})
export class ImpactMonthModule {}
