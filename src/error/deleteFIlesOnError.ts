import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { readdirSync, rmdir, unlinkSync } from 'fs';
import { dirname } from 'path';

@Catch(BadRequestException, ForbiddenException,HttpException)
export default class DeleteFileOnErrorFilter implements ExceptionFilter {
  catch(exception: BadRequestException | ForbiddenException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const file = request.file;
    console.log(file)
    if (file) {
      try {
        unlinkSync(file.path);
      } catch (err) {
        console.error('Erro inesperado ao tentar deletar arquivo', err);
      }

      const parentDir = dirname(file.path);

      if (readdirSync(parentDir)?.length === 0)
        rmdir(parentDir, err => {
          if (err)
            console.error('Erro inesperado ao tentar deletar o diretório', err);
        });
    }

    response.status(status).json(exception.getResponse());
  }
}
