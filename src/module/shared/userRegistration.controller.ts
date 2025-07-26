import { Body, Controller, Param, Post } from "@nestjs/common";
import { UserRegistrationService } from "./userRegistration.service";
import { CreateUserDTO } from "../users/dto/createUserDto";

@Controller('register')
export class UserRegistrationController {
    constructor(private readonly userRegistrationService: UserRegistrationService) {}
    
    @Post('/:idcourse')
    async createUser(@Param('idcourse') idCourse: string, @Body() user: CreateUserDTO) {
        return await this.userRegistrationService.registrateUser(user, idCourse)
    }
    
}