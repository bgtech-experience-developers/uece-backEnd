import { Inject, Injectable } from "@nestjs/common";
import { SendGridTransporter } from "./transporter";
import * as fs from 'fs'
import * as mjml2html from "mjml"
import * as path from "path";
import * as Handlebars from 'handlebars';
import { IPayloadSendMail} from "./interface/ipayloadEmail.interface";
// import { default as mjml2html } from 'mjml';
// import mjml2html from 'mjml';


@Injectable()
export class SendMail{
    constructor(private readonly sendResendTransport:SendGridTransporter ){}
    async sendEmail(payload:any){
        const {emailUser,...context} = payload
        console.log('o contexto é ', context)
        const html = await this.compileTemplate(payload.templete,context,payload.model)
        this.sendResendTransport.send({to:emailUser,subject:payload.subject,html})
    }
    private async compileTemplate(templateName: string, context: any,module:string): Promise<string> {
    const templatePath = path.join(__dirname, '..',  '..','..','..', 'template', module, `${templateName}.mjml`);

    const mjmlRaw =   fs.readFileSync(`${templatePath}`,'utf-8');
    const compiled = Handlebars.compile(mjmlRaw);
    const contextt = {confirmation_link:context.confirmation_link}
    const mjmlWithData = compiled(contextt);
    console.log(mjmlWithData)

    const {errors,html} = mjml2html(mjmlWithData,{validationLevel:'strict'})
    console.log(errors)

    if(errors.length){
        console.log('erro durante a compilação do temmplete html de : ',templateName)

    }
    return html
  }
}