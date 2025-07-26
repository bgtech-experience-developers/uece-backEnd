
import { Body, Controller, Delete, HttpCode, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUserDto";
import { UserRegistrationService } from "./shared/userRegistration.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, ) {}



    @Delete(':id')
    @HttpCode(204)
    async deleteUser(@Param('id') id: string): Promise<void> {
        await this.userService.deleteUserById(id);
    }

}
