import { Injectable } from '@nestjs/common';
import { SendEmailOptions } from 'src/interfaces/sendEmailOptions';
import { CreateEmailOptions, CreateEmailRequestOptions, Resend } from 'resend';
@Injectable()
export class SendGridTransporter {
  private resend: Resend;
    constructor(){
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }
  async send(options: SendEmailOptions): Promise<void> {
    const {
      to,
      subject,
      html,
      text,
      from = 'noreply@bgtech.com.br',
      headers,
      category,
      customArgs,
    } = options;
    const msg: CreateEmailOptions= {
      to,
      from,
      subject,
      html,
     
    };
    await this.resend.emails.send(msg);
  }
}