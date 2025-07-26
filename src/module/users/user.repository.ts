import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { CreateUserDTO } from "./dto/createUserDto";
import { createdUser } from "./types/userCreated";
import { findUnique } from "./types/findUnique";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async save(data: CreateUserDTO): Promise<createdUser> {
        return await this.prismaService.users.create({
            data: data,
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
}