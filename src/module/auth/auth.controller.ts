import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/loginDto";
import { Response } from "express";
// import { RefreshTokenGuard } from "./guard/refreshToken.guard";
import { User } from "src/decorator/req.user.decorator";
import { IpayloadTokenUser } from "./interface/payloadTokenUser.interface";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() data: LoginDto, @Res({passthrough: true}) response: Response) {
        const {refreshToken, ...dataResponse} = await this.authService.login(data);

        response.cookie('refreshToken', refreshToken, {
            sameSite: 'none',
            secure: true,
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 7000, 
        });
        return dataResponse
    }

    // @UseGuards(RefreshTokenGuard)
    // @Post('/refresh-token')
    // async refreshToken(@User() user: IpayloadTokenUser) {
    //     return await this.authService.issueTokenAcess<IpayloadTokenUser>(user);
    // }
}   