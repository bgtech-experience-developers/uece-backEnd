import { Module } from "@nestjs/common";
import { AddressModule } from "src/module/address/address.module";
import { UserRegistrationService } from "./userRegistration.service";
import { CourseModule } from "src/module/courses/course.module";
import { UserModule } from "../users/user.module";
import { UserRegistrationController } from "./userRegistration.controller";
import { BcryptService } from "src/service/bcrypt.service";

@Module({
    controllers: [UserRegistrationController],
    providers: [UserRegistrationService, BcryptService],
    imports: [AddressModule, CourseModule, UserModule]
})
export class UserRegistrationModule {}