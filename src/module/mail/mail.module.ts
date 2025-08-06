import { Global, Module } from '@nestjs/common';
import { SendGridTransporter } from './transporter';
import { SendMail } from './mail.service';

@Global()
@Module({
  providers: [SendGridTransporter,SendMail],
  exports: [SendGridTransporter,SendMail],
})
export class MailerModule {}