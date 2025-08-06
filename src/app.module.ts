import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './module/courses/course.module';

import { AuthModule } from './module/auth/auth.module';
import { GeoLocationModule } from './module/global/brokerMessage.global';
import { GuardMOdule } from './guard/manager.guard';
import { MailerModule } from './module/mail/mail.module';
import { SubscribeModule } from './module/subscribe/subscribe.module';
import { DepartamentModule } from './module/departament/departament.module';

@Module({
  imports: [ConfigModule.forRoot(),CourseModule, UserModule,DepartamentModule, AuthModule,GeoLocationModule,GuardMOdule,MailerModule,SubscribeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
