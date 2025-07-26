import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/createUserDto";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(data: CreateUserDTO) {
         
        await this.findByCPF(data.cpf);
        return await this.userRepository.save(data);
    }

    async findByCPF(cpf: string) {
        const userExists = await this.userRepository.findByUnique(cpf);

        if(userExists) {
            throw new BadRequestException('Usuário já cadastrado');
        }
        return userExists;
    }
}