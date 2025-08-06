import { CanActivate, ExecutionContext,  Injectable,  UnauthorizedException } from "@nestjs/common";
import { JwtService } from "src/service/jwt.service";
import { GetContextRequestHelper } from "src/helpers/scopedRequest.helper";
import { IpayloadUser } from "src/interfaces/payloadUser.interface";

@Injectable()
export class VerifyAccessToken implements CanActivate {
    constructor(private readonly jwtService:JwtService,private readonly getContextRequestHelper:GetContextRequestHelper){}
    async canActivate(context: ExecutionContext):Promise<boolean> {
        const token = this.extractTokenFromHeader()
        if(!token) throw new UnauthorizedException("Token JWT faltando!");
        const payload =  await this.jwtService.isValidToken<IpayloadUser>(token,{secret:process.env.ACCESS_TOKEN!})
        this.getContextRequestHelper.setPayloadUser(payload)
       
        return true
        
        
    }

   private  extractTokenFromHeader():string | null{
    const headers= this.getContextRequestHelper.getHeaders()
         if (!headers.authorization)
            return null

        const [type, token] =headers.authorization.split(' ') ?? [];

        return type === 'Bearer' ? token : null;
    }

}