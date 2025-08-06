import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { academicService } from "../academic/academic.service";
import { SubscribeRepository } from "./subscribe.repository";
import { SubscribeValidationDto } from "./dto/subscribeBody.Dto";
import { FormatedSubscribe } from "./interface/formalizedDataSubscribe.interface";
import { IpayloadTokenUser } from "../auth/interface/payloadTokenUser.interface";
@Injectable()
export class SubscribeService{
    constructor(private readonly academicFacade:academicService, private readonly subscribeRepository:SubscribeRepository){}
    async registerSubscribe(dataSubscribe:SubscribeValidationDto,departamentId:string,coursesId:string,payloadUser:IpayloadTokenUser){
     const [departament,course,user] = await  Promise.all([this.ensureDepartamentById(departamentId),this.ensureCourseById(coursesId),this.ensureUserById(payloadUser.id)])
     await this.isthisUserAlreadySubscribe(dataSubscribe.cpf)
    const formatedSubscribe = this.formalizedDataSubscribe(dataSubscribe)
    await this.saveSubscribe(departament.id,course.id,formatedSubscribe,user.id)
    }
    async saveSubscribe(departamentId:string,courseId:string,dataFormated:FormatedSubscribe,userId:string){
        return await this.subscribeRepository.createSubscribe(departamentId,courseId,userId,dataFormated)
    }
    private formalizedDataSubscribe(userSubscribe:SubscribeValidationDto):FormatedSubscribe{
        return {
            ...userSubscribe, path_file_pcd: userSubscribe.path_file_pcd ? userSubscribe.path_file_pcd : null, is_pcd: userSubscribe.path_file_pcd ? true : false
        }
    }
    async ensureDepartamentById(id:string){
    const departament = await this.academicFacade.getDepartamentById(id)
    if(!departament) throw new NotFoundException("Sede não encontrada")
    return departament
    }
    async isthisUserAlreadySubscribe(cpf:string){
    const user = await this.subscribeRepository.getUserSubscribeByCpf(cpf)
    if(user)throw new ConflictException('não é possível se inscrever mais de uma vez!')
    return
    }
    async ensureCourseById(id:string){
    const course = await this.academicFacade.getCourseById(id)
    if(!course) throw new NotFoundException('curso não encontrado')
    return course
    }
       async ensureUserById(id:string){
    const user = await this.academicFacade.getUserById(id)
    if(!user) throw new NotFoundException(' usuário não encontrado')
    return user
    }
}