import { Type } from "class-transformer"
import { IsString, IsEmail, IsDate, IsNotEmpty } from "class-validator"

export class UserDto {
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

    @IsNotEmpty()
    password: string
}