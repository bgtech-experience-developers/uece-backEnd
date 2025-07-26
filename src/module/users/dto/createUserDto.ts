import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsString } from "class-validator";

export class CreateUserDTO {

    @IsString()
    name: string

    @IsString()
    mother_name: string

    @IsString()
    cpf: string

    @IsEmail()
    email: string   

    @Type(() => Date)
    @IsDate()
    data_birth: Date
}