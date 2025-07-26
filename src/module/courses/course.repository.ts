import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class CourseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.courses.findMany({
      select: {
        id: true,
      name: true,  // ajusta aqui se o campo correto for esse
       registration_fee: true,
        address_id: true,
        number_vacancies: true,
      },
    });
  }

  async findById(id: string) {
    return await this.prismaService.courses.findUnique({
      where: {
        id
      }
    })
  }
}
