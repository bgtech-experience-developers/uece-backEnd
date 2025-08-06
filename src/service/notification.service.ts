
import { Injectable } from "@nestjs/common";
import { MessagingGatewayService } from "./messagingGateway.service";
import { SendMail } from "src/module/mail/mail.service";
@Injectable()
export class NotificationService{
     constructor(private readonly sendEmail:SendMail){}
     async sendEmailConfirmation<T>(dataToSend:T){
       this.sendEmail.sendEmail(dataToSend)
     }
}