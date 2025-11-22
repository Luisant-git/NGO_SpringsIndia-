import { PartialType } from '@nestjs/swagger';
import { CreateImpactYearDto } from './create-impact-year.dto';

export class UpdateImpactYearDto extends PartialType(CreateImpactYearDto) {}
