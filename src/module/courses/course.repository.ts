import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.courses.findMany({
      select: {
        id: true,
        course_name: true,  // ajusta aqui se o campo correto for esse
        price_registration: true,
        adress_id: true,
        amount_vacancy: true,
      },
    });
  }
}
