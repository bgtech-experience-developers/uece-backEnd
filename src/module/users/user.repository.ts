import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { CreateUserDTO } from "./dto/createUserDto";
import { createdUser } from "./types/userCreated";
import { findUnique } from "./types/findUnique";
import { UserDto } from "./dto/userDto";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async save(data: UserDto, addressId: string): Promise<createdUser> {
        return await this.prismaService.users.create({
            data: {
                ...data,
                address_id: addressId
            },
            omit: {
                update_at: true
            }
        })
    }

    async findByUnique(cpf: string): Promise<findUnique | null> {
        return await this.prismaService.users.findUnique({
            where: {
                cpf
            }
        })
    }

    async associateUserCourse(userId: string, courseId: string) {
        return this.prismaService.courses_users.create({
            data: {
                user_id: userId,
                course_id: courseId
            }
        })
    }
}