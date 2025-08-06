import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCourses() {
    const courses = await this.courseService.listCourses();
    return courses
  }
  @Get('/list-by-departament/:departamentId')
  async loadCoursesByDepartament(@Param('departamentId') departamentId:string){
    return await this.courseService.loadCoursesThroughDepartament(departamentId)
  }
}