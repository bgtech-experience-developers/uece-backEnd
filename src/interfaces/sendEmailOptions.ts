
export interface SendEmailOptionsInput {
  to: string;
  subject: string;
  from?: string;
  category?: string;
  customArgs?: Record<string, string>;
  text?: string;
}

export interface SendEmailOptions extends SendEmailOptionsInput{
    html:string
    headers?:string
}