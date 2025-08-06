import { IPayloadEmail } from "src/interfaces/payloadEmail.interface"

export interface IemailToConfirmationUser extends IPayloadEmail {
    confirmation_link:string
}