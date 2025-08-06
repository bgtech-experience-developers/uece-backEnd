import { Module } from "@nestjs/common";
import { SubscribeController } from "./subscribe.controller";
import { SubscribeService } from "./subscribe.service";
import { SubscribeRepository } from "./subscribe.repository";
import { academicModule } from "../academic/academic.module";
import { GuardMOdule } from "src/guard/manager.guard";
import { PrismaService } from "src/service/prisma.service";
@Module({
    imports:[academicModule,GuardMOdule], controllers:[SubscribeController], providers:[SubscribeService,SubscribeRepository,PrismaService]
})
export class SubscribeModule{}
