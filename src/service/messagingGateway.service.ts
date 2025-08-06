import { ClientProxy } from "@nestjs/microservices";
import { Injectable,Inject } from "@nestjs/common";
@Injectable()
export class MessagingGatewayService {
  constructor(
    @Inject('GEO_SERVICE') private readonly consulpamClient: ClientProxy,
    @Inject('RATE_LIMITING') private readonly rateLimiting:ClientProxy
    // @Inject('RABBITMQ_CHANNEL') private readonly channelClient:ChannelWrapper
  ) {}

  async sendToQueue<T = any>(queue: string, payload: T) {
    console.log(queue)
    return this.consulpamClient.emit('user-email', payload);
  }
  async usesSend<T = any>(queue: string, payload: T) {
    return this.consulpamClient.send(queue, payload);
  }
  // async publishMessage(exchange:string,routingKey:string,message:{}){
  //   this.channelClient.publish(exchange,routingKey,message)
  // }
 async sendToQueueRate<T = any>(queue: string, payload: T) {
   console.log(queue)
    return await this.rateLimiting.emit(queue, payload);
  }
 usesSendRate<T = any>(queue: string, payload: T) {
  console.log('chave de envio ',queue)
    return  this.rateLimiting.send(queue, payload);
  }
}
