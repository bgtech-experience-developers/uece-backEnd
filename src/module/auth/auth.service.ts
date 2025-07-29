import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { LoginDto } from "./dto/loginDto";
import { BcryptService } from "src/service/bcrypt.service";
import { JwtService } from "src/service/jwt.service";
import { payloadUser } from "src/interfaces/payloadUser.interface";

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

        
        const acessToken = await this.issueTokenAcess<payloadUser>({id: userExist.id, email: userExist.email, cpf: userExist.cpf});
        const refreshToken = await this.issueRefreshToken<payloadUser>({id: userExist.id, email: userExist.email, cpf: userExist.cpf});

        return { userExist, acessToken, refreshToken };
    }

    async issueTokenAcess<T extends object>(data: T): Promise<string> {
        return await this.jwtService.generateToken(data, {expiresIn: process.env.ACCESS_EXPIRE!, privateKey: process.env.ACCESS_TOKEN!} ) 
    }

    async issueRefreshToken<T extends object>(data: T): Promise<string> {
        return await this.jwtService.generateToken(data, {expiresIn: process.env.REFRESH_EXPIRE!, privateKey: process.env.REFRESH_TOKEN!})
    }
 }