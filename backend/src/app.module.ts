import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';
import { ReportsModule } from './reports/reports.module';

import { ImpactYearModule } from './impact-year/impact-year.module';
import { ImpactMonthModule } from './impact-month/impact-month.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, AdminModule, BlogModule, ReportsModule, ImpactYearModule, ImpactMonthModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
