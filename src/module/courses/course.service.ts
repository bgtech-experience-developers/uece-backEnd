import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async listCourses() {
    return this.courseRepository.findAll();
  }

  async findByIdExists(id: string): Promise<void> {
    if(!await this.courseRepository.findById(id)) {
      throw new NotFoundException("Curso inexistente")
    }
  }
 }
