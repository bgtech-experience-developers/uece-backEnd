import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagingGatewayService } from 'src/service/messagingGateway.service';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GEO_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.URL_RABBITMQ!],
           exchange: 'geo-location-exchange',  
          exchangeType: 'topic',    
          queueOptions: { durable:true},
        },
        
      },
    ]), ClientsModule.register([
      {
        name: 'RATE_LIMITING',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.URL_RABBITMQ!],
         
          exchange: 'rate-limiting',  
         
          exchangeType: 'direct',    
          queueOptions: { durable:true},
        },
        
      },
    ]),
  ],
  providers:[MessagingGatewayService],
  exports: [ClientsModule,MessagingGatewayService],
})
export class GeoLocationModule {}