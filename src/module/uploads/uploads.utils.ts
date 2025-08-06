import { BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';

import { AllowedFileTypes, AllowedFileTypesEnum } from './types/AllowedTypes.types';
import { AllowedDirectoryType } from './types/AllowedDirectory.type';

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

  public static getExceptionFactory(typeFile:AllowedFileTypes): (error: string) => void {
    console.log('ola mundo chegueio aqui')
    return (error: string) => {
      console.log(error)
      if (error === 'File is required')
        throw new BadRequestException("Atributo 'file' é obrigatório");
      if (error === `Validation failed (expected type is ${typeFile})`)
        throw new BadRequestException('Arquivo inválido');
    

      throw new BadRequestException("erro inesperado aaaa")
    };
  }
public static generateRegexDynamicTypes(mimeTypes:string[]){
  return new RegExp(`(${mimeTypes.join('|')})`, 'i');
}
}
