import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { CreateAddressDto } from "./dto/createAddressDto";
import { address } from "./types/address";

@Injectable()
export class AddressRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async save(data: CreateAddressDto): Promise<address> {
        return await this.prismaService.address.create({
            data: data
        })
    }
}