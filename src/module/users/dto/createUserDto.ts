import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "src/module/address/dto/createAddressDto";
import { UserDto } from "./userDto";

export class CreateUserDTO {
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto

    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto
}