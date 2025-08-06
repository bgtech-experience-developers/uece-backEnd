import { Body, Controller, Injectable ,Param,Post, UseGuards} from "@nestjs/common";
import { SubscribeService } from "./subscribe.service";
import { SubscribeValidationDto } from "./dto/subscribeBody.Dto";
import { VerifyAccessToken } from "src/guard/verifyAccessToken.guard";
import { User } from "src/decorator/req.user.decorator";
import { IpayloadTokenUser } from "../auth/interface/payloadTokenUser.interface";

@Controller('subscribes')
export class SubscribeController{

    constructor(private readonly subscribeService:SubscribeService){}
    @Post('/departament/:departamentoId/courses/:cursesId/enrollments')
    @UseGuards(VerifyAccessToken)
    async SubmitRegistration(@Param('departamentoId') departamentId:string, @Param('coursesId') coursesId:string, @Body() body:SubscribeValidationDto, @User() user:IpayloadTokenUser ){
        return await this.subscribeService.registerSubscribe(body,departamentId,coursesId,user)
    }
}