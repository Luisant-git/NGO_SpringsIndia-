import { PartialType } from '@nestjs/swagger';
import { CreateImpactMonthDto } from './create-impact-month.dto';

export class UpdateImpactMonthDto extends PartialType(CreateImpactMonthDto) {}
