import { IsString, IsOptional, IsBoolean, IsArray, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImpactMonthDto {
  @ApiProperty({ example: 'Launch of Spell Bee Competition – October 2022' })
  @IsString()
  title: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  monthNumber: number;

  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiProperty({ example: 'In October 2022, Springs India Foundation proudly launched...' })
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.replace(/\n/g, '\n') : value)
  description: string;

  @ApiProperty({ example: 'Impact' })
  @IsString()
  impactTitle: string;

  @ApiProperty({ example: 'Reached over 7,000 children through awareness campaigns...' })
  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.replace(/\n/g, '\n') : value)
  impactDescription: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  impactYearId: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}