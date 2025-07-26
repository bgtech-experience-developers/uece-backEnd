import { Module } from "@nestjs/common";
import { AddressModule } from "src/module/address/address.module";
import { UserRegistrationService } from "./userRegistration.service";
import { CourseModule } from "src/module/courses/course.module";
import { UserModule } from "../user.module";
import { UserRegistrationController } from "./userRegistration.controller";

@Module({
    controllers: [UserRegistrationController],
    imports: [AddressModule, CourseModule, UserModule],
    providers: [UserRegistrationService]
})
export class UserRegistrationModule {}