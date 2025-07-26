import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './module/courses/course.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule,CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
