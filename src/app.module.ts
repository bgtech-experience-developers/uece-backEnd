import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/users/user.module';

import { CourseModule } from './module/courses/course.module';
import { UserRegistrationModule } from './module/shared/userRegistration.module';
import { AuthModule } from './module/auth/auth.module';
import { UploadModule } from './module/uploads/upload.module';

@Module({
  imports: [CourseModule, UserModule, UserRegistrationModule, AuthModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
