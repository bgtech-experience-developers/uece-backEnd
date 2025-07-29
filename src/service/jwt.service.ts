import { Injectable } from "@nestjs/common";
import { JwtService as JWT } from "@nestjs/jwt";
import { jwtOptions } from "src/interfaces/jwt.interface";

@Injectable()
export class JwtService {
    private jwt = new JWT()
    
    async generateToken(payload: {}, options: jwtOptions) {
        const { exp, ...cleanPayload } = payload as any;
        return await this.jwt.signAsync(cleanPayload, options)
    }

    async isValidToken<T extends object>(token:string,options:{secret:string}):Promise<T>{
    try {
        const tokenDecoded = await this.jwt.verify<T>(token, options)
        return tokenDecoded

    } catch(error){
        throw error
    }
}
}