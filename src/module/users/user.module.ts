import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { UserRepository } from "./user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MessagingGatewayService } from "src/service/messagingGateway.service";
import { JwtService } from "src/service/jwt.service";
import { GuardMOdule } from "src/guard/manager.guard";
import { VerifyAccessToken } from "src/guard/verifyAccessToken.guard";
import { NotificationService } from "src/service/notification.service";
import { BcryptService } from "src/service/bcrypt.service";

@Module({
    imports: [GuardMOdule],
    controllers: [UserController],
    providers: [PrismaService, UserRepository, UserService,NotificationService,BcryptService],
    exports: [UserService]
})

export class UserModule {}