import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async listCourses() {
    return this.courseRepository.findAll();
  }

  async findByIdExists(id: string){
    return await this.courseRepository.findById(id) 
 }
}