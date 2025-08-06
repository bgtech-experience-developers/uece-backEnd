import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import UploadsUtils from '../uploads.utils';

import DestinationCallback, { FIleNameCallBack } from '../types/CallBackFunction';
import { existsSync, mkdirSync } from 'fs';
import { AllowedDirectoryType } from '../types/AllowedDirectory.type';
import { createFileFilter } from '../filter/fileFilter.filter';
import { AllowedFileTypesEnum } from '../types/AllowedTypes.types';

export const diskFileInterceptor = (directory:AllowedDirectoryType) => {
  return FileInterceptor('file', {
    storage: diskStorage({
      destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) => {
        const dirName = `${process.env.UPLOAD_DIR_PATH}/${directory}`;
        console.log(dirName)
        if (!existsSync(dirName)) mkdirSync(dirName);

        cb(null, dirName);
      },
     

      filename: (_req: Request, file: Express.Multer.File, cb: FIleNameCallBack) => {
        const fileName = UploadsUtils.getUniqueName(
          file.originalname,
          `${process.env.UPLOAD_DIR_PATH}/${directory}`,
        );
        console.log('o nome do arquivo é ',fileName)
        cb(null, fileName);
      },
    }),
    fileFilter: createFileFilter(AllowedFileTypesEnum.filesAvailable, 'Apenas imagens são permitidas'),
      limits: { fileSize: 100 * 1024 * 1024 }, 
  });
};
