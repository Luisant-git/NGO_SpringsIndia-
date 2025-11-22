import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ImpactMonthService } from './impact-month.service';
import { CreateImpactMonthDto } from './dto/create-impact-month.dto';
import { UpdateImpactMonthDto } from './dto/update-impact-month.dto';

@ApiTags('impact-month')
@Controller('impact-month')
export class ImpactMonthController {
  constructor(private readonly impactMonthService: ImpactMonthService) {}

  @Post()
  @ApiOperation({ summary: 'Create new impact month' })
  @ApiResponse({ status: 201, description: 'Impact month created successfully' })
  create(@Body() createImpactMonthDto: CreateImpactMonthDto) {
    return this.impactMonthService.create(createImpactMonthDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all impact months' })
  @ApiResponse({ status: 200, description: 'All impact months retrieved' })
  findAll(@Query('yearId') yearId?: string) {
    if (yearId) {
      return this.impactMonthService.findByYear(+yearId);
    }
    return this.impactMonthService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get impact month by ID' })
  @ApiResponse({ status: 200, description: 'Impact month retrieved' })
  findOne(@Param('id') id: string) {
    return this.impactMonthService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update impact month' })
  @ApiResponse({ status: 200, description: 'Impact month updated successfully' })
  update(@Param('id') id: string, @Body() updateImpactMonthDto: UpdateImpactMonthDto) {
    return this.impactMonthService.update(+id, updateImpactMonthDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete impact month' })
  @ApiResponse({ status: 200, description: 'Impact month deleted successfully' })
  remove(@Param('id') id: string) {
    return this.impactMonthService.remove(+id);
  }
}