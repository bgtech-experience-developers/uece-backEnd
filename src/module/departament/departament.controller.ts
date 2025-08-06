import { Controller, Injectable,Get } from "@nestjs/common";
import { DepartamentService } from "./departament.service";

@Controller('departaments')
export class DepartamentController{
    constructor(private readonly departamentsService:DepartamentService){}
    @Get()
    async loadDepartaments(){
        return await this.departamentsService.loadDepartaments()
    }
}