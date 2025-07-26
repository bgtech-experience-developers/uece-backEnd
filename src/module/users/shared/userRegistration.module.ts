import { Module } from "@nestjs/common";
import { AddressModule } from "src/module/address/address.module";
import { UserRegistration } from "./userRegistration.service";

@Module({
    imports: [AddressModule],
    providers: [UserRegistration]
})
export class UserRegistrationModule {}