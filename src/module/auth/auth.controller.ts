import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/loginDto";
import { Response } from "express";

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

    @Get()
    async oi() {
        return 'Oi som'
    }
    
}   