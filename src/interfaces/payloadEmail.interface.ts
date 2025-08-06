export interface IPayloadEmail{
    subject:string
    emailUser:string
    templete:TemplateEmail
    model:modelEmailTemplete
}
export enum TemplateEmail{
    RESETPASSWORD = 'reset-password',
    INVITEEVENT =   'invite-event',
    TEMPORYCREDENTIALS = 'login-tempory',
    CONFIRMATIONEMAILS= 'confirmation-email'
}
export enum modelEmailTemplete{
    EVENT = 'event',
    USER = 'user',
    COMMOM = 'common'
}
