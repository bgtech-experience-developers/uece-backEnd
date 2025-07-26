import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async deleteById(id: string) {
    return this.prisma.users.delete({ where: { id } });
  }
}
