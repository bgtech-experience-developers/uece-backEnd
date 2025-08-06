import { Module } from "@nestjs/common";
import { GetContextRequestHelper } from "src/helpers/scopedRequest.helper";
import { JwtService } from "src/service/jwt.service";
import { VerifyAccessToken } from "./verifyAccessToken.guard";




@Module({
    
    providers: [JwtService,GetContextRequestHelper,VerifyAccessToken],
    exports:[VerifyAccessToken,JwtService,GetContextRequestHelper]
})
export class GuardMOdule{}