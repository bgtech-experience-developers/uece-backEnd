import { Type } from "class-transformer"
import { IsString, IsEmail, IsDate, IsNotEmpty } from "class-validator"

export class UserDto {
    @IsEmail()
    email: string  
    @IsString() 
    password: string
}