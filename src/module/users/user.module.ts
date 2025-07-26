import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { UserRepository } from "./user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [PrismaService, UserRepository, UserService]
})

export class UserModule {}