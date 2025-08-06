import {  IsEmail, IsString, ValidateNested } from "class-validator"
import { Match } from "src/decorator/matchValues.decorator"

export class ConfirmationRegisterBody{
    @IsEmail()
    email:string
    @IsString()
    password:string
    @IsString()
    @Match('password',{message: 'A confirmação de senha não corresponde à senha'})
    confirmPassword:string
}