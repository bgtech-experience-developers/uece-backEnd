import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import * as path from 'path';  

import DestinationCallback, { FIleNameCallBack } from '../types/CallBackFunction';
import { existsSync, mkdirSync } from 'fs';
import UploadsUtils from '../uploads.utils';

export const diskFileInterceptor = () => {
  return FileInterceptor('file', {
    storage: diskStorage({
      destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) => {
        const dirName = path.join(process.cwd(),`/uploads`);

        if (!existsSync(dirName)) mkdirSync(dirName, {recursive: true});

        cb(null, dirName);
      },

      filename: (_req: Request, file: Express.Multer.File, cb: FIleNameCallBack) => {
          const fileName = UploadsUtils.getUniqueName(
          file.originalname,
          `/uploads`,
        );


        cb(null, fileName);
      },
    }),
  });
};
