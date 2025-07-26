import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/prisma.service";
import { AddressRepository } from "./address.repository";
import { AddressService } from "./address.service";

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService, AddressRepository, AddressService]
})
export class AddressModule { }