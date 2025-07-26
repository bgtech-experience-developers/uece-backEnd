import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService,UserRepository],
})
export class UserModule {}