import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImpactYearDto {
  @ApiProperty({ example: 'APRIL 2023-MARCH 2024' })
  @IsString()
  year: string;

  @ApiProperty({ example: 4 })
  @IsNumber()
  fromMonth: number;

  @ApiProperty({ example: 2023 })
  @IsNumber()
  fromYear: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  toMonth: number;

  @ApiProperty({ example: 2024 })
  @IsNumber()
  toYear: number;

  @ApiProperty({ example: 'The year 2023–2024 marked a special chapter for Springs India Foundation...' })
  @IsString()
  description: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}