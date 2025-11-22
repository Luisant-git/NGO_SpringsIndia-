import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ImpactYearService } from './impact-year.service';
import { CreateImpactYearDto } from './dto/create-impact-year.dto';
import { UpdateImpactYearDto } from './dto/update-impact-year.dto';

@ApiTags('impact-year')
@Controller('impact-year')
export class ImpactYearController {
  constructor(private readonly impactYearService: ImpactYearService) {}

  @Post()
  @ApiOperation({ summary: 'Create new impact year' })
  @ApiResponse({ status: 201, description: 'Impact year created successfully' })
  create(@Body() createImpactYearDto: CreateImpactYearDto) {
    return this.impactYearService.create(createImpactYearDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all impact years' })
  @ApiResponse({ status: 200, description: 'All impact years retrieved' })
  findAll() {
    return this.impactYearService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get impact year by ID' })
  @ApiResponse({ status: 200, description: 'Impact year retrieved' })
  findOne(@Param('id') id: string) {
    return this.impactYearService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update impact year' })
  @ApiResponse({ status: 200, description: 'Impact year updated successfully' })
  update(@Param('id') id: string, @Body() updateImpactYearDto: UpdateImpactYearDto) {
    return this.impactYearService.update(+id, updateImpactYearDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete impact year' })
  @ApiResponse({ status: 200, description: 'Impact year deleted successfully' })
  remove(@Param('id') id: string) {
    return this.impactYearService.remove(+id);
  }
}