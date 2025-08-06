import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import type { Express } from 'express';

interface DynamicFileTypeValidatorOptions {
  allowedTypes: (string | RegExp)[];
  errorMessage?: string;
}

@Injectable()
export class DynamicFileTypeValidator implements PipeTransform {
  private allowedTypes: (string | RegExp)[];
  private errorMessage: string;

  constructor(options: DynamicFileTypeValidatorOptions) {
    this.allowedTypes = options.allowedTypes;
    this.errorMessage =
      options.errorMessage || `Invalid file type. Allowed types: ${this.allowedTypes.join(', ')}`;
  }

  transform(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }

    const { mimetype } = file;

    const isValid = this.allowedTypes.some((type) => {
      if (typeof type === 'string') {
        // aceita se mimetype começa com o string (ex: 'image/')
        return mimetype.startsWith(type);
      }
      if (type instanceof RegExp) {
        return type.test(mimetype);
      }
      return false;
    });

    if (!isValid) {
      throw new BadRequestException(this.errorMessage);
    }

    return file;
  }
}
