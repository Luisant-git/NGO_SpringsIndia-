import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';

import { ImpactYearModule } from './impact-year/impact-year.module';
import { ImpactMonthModule } from './impact-month/impact-month.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [AdminModule, ImpactYearModule, ImpactMonthModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
