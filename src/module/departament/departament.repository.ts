import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";

@Injectable()
export class DepartamentRepository{
    constructor(private readonly prismaService:PrismaService){}
    async loadDepartaments(){
        return this.prismaService.departament.findMany()
    }
    async loadDepartamentById(id:string){
        return await this.prismaService.departament.findUnique({where:{id}})
    }
    async getUniqueDepartamentById(id:string){
        return await this.prismaService.departament.findUnique({where:{id}})
    }
}