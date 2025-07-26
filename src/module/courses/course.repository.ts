import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Injectable()
export class CourseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.courses.findMany({
      select: {
        id: true,
      name: true,  // ajusta aqui se o campo correto for esse
       registration_fee: true,
        address_id: true,
        number_vacancies: true,
      },
    });
  }
}
