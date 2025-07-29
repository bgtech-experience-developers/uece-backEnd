import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalServerErrorException, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = () => {
  const { ACCESS_EXPIRE, REFRESH_EXPIRE, ACCESS_TOKEN, REFRESH_TOKEN } = process.env;
      if(ACCESS_EXPIRE && REFRESH_EXPIRE && ACCESS_TOKEN && REFRESH_TOKEN){
        console.log('variveis carregadas')      
        return 
      }
      throw new InternalServerErrorException('variaveis de ambiente não configurada');
  }

  env()

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()

