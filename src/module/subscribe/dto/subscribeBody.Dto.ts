
import { IsString, IsBoolean, IsOptional, IsDateString, Length ,ValidateNested} from 'class-validator';
import { Transform ,Type} from 'class-transformer';
import { CreateAddressDto } from 'src/module/address/dto/createAddressDto';
export class SubscribeValidationDto{

  @IsOptional()
  @IsString()
  path_file_pcd?: string;
  @IsString()
  phone: string;

  @Transform(({ value }) => new Date(value))
  @IsDateString()
  data_birth: Date;

  @IsOptional()
  @IsString()
  mother_name?: string;

  @IsOptional()
  @IsString()
  father_name?: string;

  @IsString()
  @Length(11, 11, { message: 'CPF deve ter exatamente 11 caracteres' })
  cpf: string;
@ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto
}
