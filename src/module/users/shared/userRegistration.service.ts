import { Injectable } from "@nestjs/common";
import { AddressService } from "src/module/address/address.service";
import { UserService } from "../user.service";
import { CreateUserDTO } from "../dto/createUserDto";

@Injectable()
export class UserRegistration {
    constructor(private readonly addressService: AddressService, private readonly userService: UserService) {}

    async registrateUser(data: CreateUserDTO) {
        await this.userService.findByCPF(data.user.cpf);
        const address = await this.addressService.createAddress(data.address);
        await this.userService.createUser(data.user, address.id)

        //chamar o metodo de associatecourses
        //validar a existencia do course
    }
}