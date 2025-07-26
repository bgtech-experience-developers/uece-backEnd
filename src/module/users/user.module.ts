import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { UserRepository } from "./user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRegistrationModule } from "./shared/userRegistration.module";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [PrismaService, UserRepository, UserService],
    exports: [UserService]
})

export class UserModule {}