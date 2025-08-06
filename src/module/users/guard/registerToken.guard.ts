import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { VerifyAccessToken } from "src/guard/verifyAccessToken.guard";
import { GetContextRequestHelper } from "src/helpers/scopedRequest.helper";
import { JwtService } from "src/service/jwt.service";

import { IregisterToken, registerUser } from "../interface/registerToken.interface";

@Injectable()
export class VerifyRegisterToken implements CanActivate {
    constructor(private readonly jtwService: JwtService, private readonly getContextRequestHelper: GetContextRequestHelper) {}

    async canActivate(context: ExecutionContext):Promise<boolean> {
        const token = this.getContextRequestHelper.extractTokenFromHeader();
        
        if(!token) throw new UnauthorizedException("Token inválido!"); 
        
        const payload = await this.jtwService.isValidToken<IregisterToken>(token, {secret: process.env.REGISTER_KEY!});
                
        this.getContextRequestHelper.setPayloadUser<registerUser>(payload)
        return true;
    }


}