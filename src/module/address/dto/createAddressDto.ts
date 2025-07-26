import { IsString, Max, Min } from "class-validator";

export class CreateAddressDto {
    @IsString()
    @Max(8)
    @Min(8)
    cep: string

    @IsString()
    state: string

    @IsString()
    city: string

    @IsString()
    neighborhood: string

    @IsString()
    street: string

    @IsString()
    number: string
}