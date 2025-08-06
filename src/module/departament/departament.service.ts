import { Injectable } from "@nestjs/common";
import { DepartamentRepository } from "./departament.repository";

@Injectable()
export class DepartamentService{
    constructor(private readonly departamentsRepository:DepartamentRepository){}
    async loadDepartaments(){
        return await this.departamentsRepository.loadDepartaments()
    }
    async loadDepartamentById(id:string){
        return await this.departamentsRepository.loadDepartamentById(id)
    }
}