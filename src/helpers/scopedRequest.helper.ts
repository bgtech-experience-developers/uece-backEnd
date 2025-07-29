import { Injectable,Inject ,Scope} from "@nestjs/common";
import { Request } from "express";
import { REQUEST } from '@nestjs/core';
import { RequestCookies} from "src/interfaces/requestCookie.interface";

@Injectable({ scope: Scope.REQUEST })
export class GetContextRequestHelper {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getPayloadUser<T>(): T {
    return this.request.user as T;
  }

  getBodyRequest<T>():T{
    return this.request.body
  }

  setBodyRequest(body: unknown){
    this.request.body = body
  }

  setPayloadUser<T extends object>(payloadUser: T) {
    this.request.user = payloadUser;
  }

  getCookies(){
    return this.request.cookies as RequestCookies
  }

  getHeaders() {
    return this.request?.headers;
  }

  getIP() {
    return this.request?.ip;
  }

  extractTokenFromHeader():string | null {
    const headers= this.getHeaders()
    
         if (!headers.authorization){
           return null
         }

        const [type, token] = headers.authorization.split(' ') ?? [];
        
        return type === 'Bearer' ? token : null;
  }
}
