import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CourseModule } from './module/courses/course.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { UserModule } from './module/users/user.module';

@Module({
   imports: [CourseModule,UserModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
