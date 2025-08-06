import { BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';

import { AllowedFileTypesEnum } from './types/AllowedTypes.types';

export default class UploadsUtils {
  public static getUniqueName(fileName: string, directoryPath: string): string {
    if (!existsSync(`${directoryPath}/${fileName}`)) return fileName;

    const fileNameArray = fileName.split('.');

    const extension = fileNameArray.length > 1 ? fileNameArray[fileNameArray.length - 1] : '';
    const nameWithoutExtension = fileNameArray.slice(0, fileNameArray.length - 1).join('.');

    let index = 1;
    let uniqueFileName = '';

    do {
      uniqueFileName = nameWithoutExtension + `(${index++}).` + extension;
    } while (existsSync(`${directoryPath}/${uniqueFileName}`));

    return uniqueFileName;
  }

  // public static getExceptionFactory(typeFile: AllowedFileTypesEnum): (error: string) => void {
  //   return (error: string) => {
  //     if (error === 'File is required')
  //       throw new BadRequestException("Atributo 'file' é obrigatório");
  //     if (error === `Validation failed (expected type is ${typeFile})`)
  //       throw new BadRequestException('Arquivo inválido');
    

  //     throw new BadRequestException("erro inesperado")
  //   };
  // }
}
