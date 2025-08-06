import { Module } from "@nestjs/common";
import { SubscribeController } from "./subscribe.controller";
import { SubscribeService } from "./subscribe.service";
import { SubscribeRepository } from "./subscribe.repository";
import { academicModule } from "../academic/academic.module";
@Module({
    imports:[academicModule], controllers:[SubscribeController], providers:[SubscribeService,SubscribeRepository]
})
export class SubscribeModule{}
