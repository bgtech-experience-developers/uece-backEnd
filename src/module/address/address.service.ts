import { Injectable } from "@nestjs/common";
import { AddressRepository } from "./address.repository";
import { CreateAddressDto } from "./dto/createAddressDto";
import { address } from "./types/address";

@Injectable()
export class AddressService {
    constructor(private readonly addressRepository: AddressRepository) {}

    async createAddress(data: CreateAddressDto): Promise<address> {
        return await this.addressRepository.save(data);
    }

}