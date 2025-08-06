// import { CanActivate, ExecutionContext,  Injectable,  UnauthorizedException } from "@nestjs/common";
// import { JwtService } from "src/service/jwt.service";

// import { GetContextRequestHelper } from "src/helpers/scopedRequest.helper";
// import { payloadUser } from "src/interfaces/payloadUser.interface";

// @Injectable()
// export class RefreshTokenGuard implements CanActivate {
//     constructor(private readonly jwtService:JwtService, private readonly getContextRequestHelper:GetContextRequestHelper){}
//     async canActivate(context: ExecutionContext):Promise<boolean> {
//         const cookies = this.getContextRequestHelper.getCookies()
//         console.log(cookies);
        
//         const refreshToken = cookies?.refreshToken
//         if(!refreshToken){
//             throw new UnauthorizedException('Token de refresh está ausente')
//         }

//         const payload =  await this.jwtService.isValidToken<payloadUser>(refreshToken,{secret:process.env.REFRESH_TOKEN!})
        
//         this.getContextRequestHelper.setPayloadUser(payload);
        
//         return true       
        
//     }

// }