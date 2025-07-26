import { Injectable } from "@nestjs/common";
import { AddressService } from "src/module/address/address.service";
import { UserService } from "../users/user.service";
import { CreateUserDTO } from "../users/dto/createUserDto";
import { CourseService } from "src/module/courses/course.service";

@Injectable()
export class UserRegistrationService {
    constructor(
        private readonly addressService: AddressService, 
        private readonly userService: UserService, 
        private readonly courseService: CourseService) {}

    async registrateUser(data: CreateUserDTO, courseId: string) {
        await this.courseService.findByIdExists(courseId);

        await this.userService.findByCPFExist(data.user.cpf);

        const address = await this.addressService.createAddress(data.address);
        const user = await this.userService.createUser(data.user, address.id)
        
        await this.userService.associateUserCourse(user.id, courseId);
    }
}