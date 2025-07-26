import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/users/user.module';

import { CourseModule } from './module/courses/course.module';
import { UserRegistrationModule } from './module/users/shared/userRegistration.module';

@Module({
   imports: [CourseModule,UserModule, UserRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
