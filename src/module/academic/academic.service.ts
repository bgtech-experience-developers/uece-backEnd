import { Injectable } from "@nestjs/common";
import { DepartamentService } from "../departament/departament.service";
import { CourseService } from "../courses/course.service";
import { UserService } from "../users/user.service";

@Injectable()
export class academicService{
    constructor(private readonly departamentService:DepartamentService, private readonly coursesService:CourseService, private readonly userService:UserService){}
    async getDepartamentById(id:string){
        return await this.departamentService.loadDepartamentById(id)
    }
    async getCourseById(id:string){
        return await this.coursesService.findByIdExists(id)
    }
    async getUserById(id:string){
        return await this.userService.getById(id)
    }
}