import { BadRequestException } from '@nestjs/common';
import type { Express } from 'express';
export const createFileFilter = (
  regexFile: RegExp,
  errorMessage = 'Tipo de arquivo não permitido',
) => {
  return (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    if (!regexFile.test(file.mimetype)) {
      return callback(new BadRequestException(errorMessage), false);
    }
    callback(null, true);
  };
};
