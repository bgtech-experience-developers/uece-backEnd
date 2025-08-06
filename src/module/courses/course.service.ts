import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { DepartamentService } from '../departament/departament.service';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository,private readonly departamentService:DepartamentService) {}

  async listCourses() {
    return this.courseRepository.findAll();
  }

  async findByIdExists(id: string){
    return await this.courseRepository.findById(id) 
 }
 async loadCoursesThroughDepartament(departamentId:string){
const departament = await this.assureDepartamentById(departamentId)

return this.courseRepository.loadCoursesByDepartamentId(departamentId)
 }
 
 async assureDepartamentById(departamentId:string){
  return await this.departamentService.assureDepartamentExistById(departamentId)
 }
}