import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { FormatedSubscribe } from "./interface/formalizedDataSubscribe.interface";

@Injectable()
export class SubscribeRepository{
    constructor(private readonly prismaService:PrismaService){
    }
    async getUserSubscribeByCpf(cpf:string){
        return await this.prismaService.subscribe.findUnique({where:{cpf}})
    }
    async createSubscribe(departamentId:string,courseId:string,userId:string,data:FormatedSubscribe){
        return await this.prismaService.$transaction(async(tsx)=>{
            const {id}= await tsx.address.create({data:{...data.address},select:{id:true}})
            await tsx.users.update({where:{id:userId},data:{is_subscribe:true}})
            await tsx.subscribe.create({data:{address_id:id,courses_id:courseId,departaments_id:departamentId,cpf:data.cpf,data_birth:data.data_birth,phone:data.phone,is_pcd:data.is_pcd,user_id:userId}})
        })
    }
}