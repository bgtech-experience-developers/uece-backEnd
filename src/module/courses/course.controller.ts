import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getCourses() {
    const courses = await this.courseService.listCourses();
    // Renomeia 'name' para 'course_name' no retorno
    return courses.map(course => ({
      id: course.id,
      course_name: course.name,
    }));
  }
}