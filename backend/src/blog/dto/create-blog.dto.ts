import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBlogDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  @MaxLength(200)
  excerpt: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  category: string;

  @IsString()
  @IsOptional()
  readTime?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === true) return true;
    if (value === false) return false;
    return false; // Default to false for any other value
  })
  published?: boolean;
}