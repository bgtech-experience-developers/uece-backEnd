import { Module } from "@nestjs/common";
import { academicService } from "./academic.service";
import { CourseModule } from "../courses/course.module";
import { DepartamentModule } from "../departament/departament.module";
import { PrismaService } from "src/service/prisma.service";
import { UserModule } from "../users/user.module";

@Module({imports:[CourseModule,DepartamentModule,UserModule],providers:[academicService,PrismaService],exports:[academicService]})
export class academicModule{}