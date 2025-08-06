import { CreateAddressDto } from "src/module/address/dto/createAddressDto";

export interface FormatedSubscribe{
    address:CreateAddressDto;
    path_file_pcd: string | null;
    phone: string;
    data_birth: Date;
    mother_name?: string;
    father_name?: string;
    is_pcd:boolean
    cpf: string;

}
