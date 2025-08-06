import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseRepository } from './course.repository';
import { PrismaService } from 'src/service/prisma.service';
import { DepartamentModule } from '../departament/departament.module';

@Module({
  imports:[DepartamentModule],
  controllers: [CourseController],
  providers: [CourseService, CourseRepository, PrismaService],
  exports: [CourseService,CourseRepository]
})
export class CourseModule {}
