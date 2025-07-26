import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUserDto";
import { UserDto } from "./dto/userDto";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(data: UserDto, addressId: string) {
         
       const user = this.userRepository.save(data, addressId);

    }

    async findByCPF(cpf: string) {
        const userExists = await this.userRepository.findByUnique(cpf);

        if(userExists) {
            throw new BadRequestException('Usuário já cadastrado');
        }
        return userExists;
    }

    async associateUserCourse(userId: string, courseId: string) {
        await this.userRepository.associateUserCourse(userId, courseId)
    }
}