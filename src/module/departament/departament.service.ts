import { Injectable, NotFoundException } from "@nestjs/common";
import { DepartamentRepository } from "./departament.repository";
import { NotFoundError } from "rxjs";

@Injectable()
export class DepartamentService{
    constructor(private readonly departamentsRepository:DepartamentRepository){}
    async loadDepartaments(){
        return await this.departamentsRepository.loadDepartaments()
    }
    async loadDepartamentById(id:string){
        return await this.departamentsRepository.loadDepartamentById(id)
    }
    async getUniqueDepartamentById(id:string){
        return await this.departamentsRepository.getUniqueDepartamentById(id)
    }
    async assureDepartamentExistById(id:string){
        const departament = this.getUniqueDepartamentById(id)
        if(!departament) throw new NotFoundException('distrito não encontrado')
        return departament
    }
}