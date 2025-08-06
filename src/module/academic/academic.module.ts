import { Module } from "@nestjs/common";
import { academicService } from "./academic.service";
import { CourseModule } from "../courses/course.module";
import { DepartamentModule } from "../departament/departament.module";
import { PrismaService } from "src/service/prisma.service";

@Module({imports:[CourseModule,DepartamentModule],providers:[academicService,PrismaService],exports:[academicService]})
export class academicModule{}