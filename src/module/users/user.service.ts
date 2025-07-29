
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUserDto";
import { UserDto } from "./dto/userDto";
import { createdUser } from "./types/userCreated";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(data: UserDto, addressId: string): Promise<createdUser> {
         
       return await this.userRepository.save(data, addressId);

    }

    async findByCPFExist(cpf: string) {
        const userExists = await this.userRepository.findByUnique(cpf);

        if(userExists) {
            throw new BadRequestException('Usuário já cadastrado');
        }
        return userExists;
    }

    async associateUserCourse(userId: string, courseId: string) {
        await this.userRepository.associateUserCourse(userId, courseId)
    }

    async deleteUserById(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.deleteById(id);
  }
}
