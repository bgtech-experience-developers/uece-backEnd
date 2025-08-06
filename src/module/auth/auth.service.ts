import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { LoginDto } from "./dto/loginDto";
import { BcryptService } from "src/service/bcrypt.service";
import { JwtService } from "src/service/jwt.service";

import { IpayloadTokenUser } from "./interface/payloadTokenUser.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly bcryptService: BcryptService,
        private readonly jwtService: JwtService
    ) {}

    async login(user: LoginDto) {
        const userExist = await this.userService.findByEmail(user.email)
        if (!userExist) throw new NotFoundException('Usuário não encontrado!');

        const isEqual = await this.bcryptService.verifyHash(user.password, userExist.password);
        if(!isEqual) throw new BadRequestException("Usuário não autorizado!");

        
        const acessToken = await this.issueTokenAcess<IpayloadTokenUser>({id: userExist.id, email: userExist.email,is_subscribe:userExist.is_subscribe });
        const refreshToken = await this.issueRefreshToken<IpayloadTokenUser>({id: userExist.id, email: userExist.email,is_subscribe:userExist.is_subscribe});

        return { userExist, acessToken, refreshToken };
    }

    async issueTokenAcess<T extends object>(data: T): Promise<string> {
        return await this.jwtService.generateToken(data, {expiresIn: process.env.ACCESS_EXPIRE!, secret: process.env.ACCESS_TOKEN!} ) 
    }

    async issueRefreshToken<T extends object>(data: T): Promise<string> {
        return await this.jwtService.generateToken(data, {expiresIn: process.env.REFRESH_EXPIRE!, secret: process.env.REFRESH_TOKEN!})
    }
 }