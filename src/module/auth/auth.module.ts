import { Module } from "@nestjs/common";
import { UserModule } from "../users/user.module";
import { BcryptService } from "src/service/bcrypt.service";
import { JwtService } from "src/service/jwt.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GetContextRequestHelper } from "src/helpers/scopedRequest.helper";

@Module({
    imports: [UserModule],
    providers: [BcryptService, JwtService, AuthService, GetContextRequestHelper],
    controllers: [AuthController]
})
export class AuthModule {
}