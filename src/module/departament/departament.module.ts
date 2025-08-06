import { Module } from "@nestjs/common";
import { DepartamentController } from "./departament.controller";
import { DepartamentService } from "./departament.service";
import { DepartamentRepository } from "./departament.repository";
import { PrismaService } from "src/service/prisma.service";
@Module({
    imports:[],controllers:[DepartamentController],providers:[DepartamentService,DepartamentRepository,PrismaService], exports:[DepartamentService,DepartamentRepository]
})
export class DepartamentModule{}