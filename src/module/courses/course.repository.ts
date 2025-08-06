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
  async loadCoursesByDepartamentId(departamentId:string){
    return await this.prismaService.$queryRaw`SELECT c.* 
FROM departament_course AS ds
INNER JOIN courses AS c ON c.id = ds.course_id
WHERE ds.departament_id = ${departamentId};
`
  }
}
