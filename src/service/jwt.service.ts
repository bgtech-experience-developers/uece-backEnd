import { Injectable } from "@nestjs/common";
import { JwtService as JWT } from "@nestjs/jwt";
import { jwtOptions } from "src/interfaces/jwt.interface";

@Injectable()
export class JwtService {
    private jwt = new JWT()
    
    async generateToken(payload: {}, options: jwtOptions) {
        return await this.jwt.signAsync(payload, options)
    }
}