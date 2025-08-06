
import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserDto } from "./dto/userDto";
import { createdUser } from "./types/userCreated";
import { findUnique } from "./types/findUnique";

import { jwtOptions } from "src/interfaces/jwt.interface";
import { JwtService } from "src/service/jwt.service";
import { IPayloadEmail, modelEmailTemplete, TemplateEmail } from "src/interfaces/payloadEmail.interface";
import { NotificationService } from "src/service/notification.service";
import { IemailToConfirmationUser } from "./interface/emailToConfirmationUser.interface";
import { BcryptService } from "src/service/bcrypt.service";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository,private readonly notificationService:NotificationService,private readonly jwtService:JwtService,private readonly bycriptService:BcryptService) {}

    // async createUser(data: UserDto, addressId: string): Promise<createdUser> {
         
    //    return await this.userRepository.save(data, addressId);

    // }

    // async findByCPFExist(cpf: string) {
    //     const userExists = await this.userRepository.findByUnique(cpf);

    //     if(userExists) {
    //         throw new BadRequestException('Usuário já cadastrado');
    //     }
    //     return userExists;
    // }
  
  async confirmationRegisterUser(user:UserDto){
    await this.verifyIsRegisteredUser(user.email)
    const tokenRegisterUser = await this.generateUserToken(user,{secret:process.env.REGISTER_KEY!,expiresIn:'7d'})
    this.sendEmailToConfirmation(user,tokenRegisterUser)
    return 'email enviado verifique sua caixa de entranda'

  }
  async getUserByEmail(email:string){
    return await this.userRepository.findByEmail(email)
  }
  async getById(id:string){
    return await this.userRepository.getById(id)
  }
   async verifyIsRegisteredUser(email:string):Promise<void>{
    try {

    const existsEvent = await this.getUserByEmail(email)
    if(existsEvent){
        throw new ConflictException('Usuário já cadastrado no sistema.')
    }
    return;
    } catch(error){
         throw error
    }
   }
   async registerUser(user:UserDto){
    await this.verifyIsRegisteredUser(user.email)
    const hashPassword = await this.generateHashPassword(user.password)
    await this.saveUser({email:user.email,password:hashPassword})
    return 'usuário caddastrado com sucesso'
   }
async saveUser(user:UserDto){
  return await this.userRepository.save(user)
}
   private async generateHashPassword(password:string,salt:number = 10){
    return await this.bycriptService.hash(password,salt)
   }
  private  sendEmailToConfirmation(user:UserDto,userTokenRegister:string){
    const confirmation_link = `${process.env.BASE_URL_FRONT}?token=${userTokenRegister}`
    this.notificationService.sendEmailConfirmation<IemailToConfirmationUser>({emailUser:user.email,confirmation_link,model:modelEmailTemplete.COMMOM
      , subject: "confirmação de valor", templete: TemplateEmail.CONFIRMATIONEMAILS
    })
  }
  private async generateUserToken(user:UserDto,options:jwtOptions):Promise<string>{
    const token = await this.jwtService.generateToken(user,options)
    return token
  }
    // async associateUserCourse(userId: string, courseId: string) {
    //     await this.userRepository.associateUserCourse(userId, courseId)
    // }

    async deleteUserById(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.userRepository.deleteById(id);
    }

    async findByEmail(email: string): Promise<findUnique | null> {
      return await this.userRepository.findByEmail(email);
    }
}
