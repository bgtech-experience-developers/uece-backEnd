
import { Body, Controller, Delete, HttpCode, Param, Post, UseGuards,Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUserDto";
import { VerifyRegisterToken } from "./guard/registerToken.guard";
import { User } from "src/decorator/req.user.decorator";
import { UserDto } from "./dto/userDto";
import { ConfirmationRegisterBody } from "./dto/confirmationRegisterBody.Dto";
import { VerifyAccessToken } from "src/guard/verifyAccessToken.guard";
import { IpayloadUser } from "src/interfaces/payloadUser.interface";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}



    @Delete(':id')
    @HttpCode(204)
    async deleteUser(@Param('id') id: string): Promise<void> {
        await this.userService.deleteUserById(id);
    }
    @Post('/confirmation-register')
    async confirmationRegister(@Body() body:ConfirmationRegisterBody){
        const user:UserDto = {email:body.email,password:body.password}
        const response = await this.userService.confirmationRegisterUser(user)
        return response
    }
    @UseGuards(VerifyRegisterToken)
    @Post('/register')
    async registerUser(@User() user:UserDto){
        return await this.userService.registerUser(user) 
    }
    @Get('/me')
    @UseGuards(VerifyAccessToken)
    async userData(@User() user:IpayloadUser){

    }
}
