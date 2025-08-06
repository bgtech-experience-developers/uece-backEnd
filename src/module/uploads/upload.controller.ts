import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, Res, UploadedFile, UseFilters, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskFileInterceptor } from "./interceptors/upload.interceptor";
import DeleteFileOnErrorFilter from "src/error/deleteFIlesOnError";
import { createFileFilter } from "./filter/fileFilter.filter";
// import subscribePipeValidator from "./validators/subscribe.validator";
@UseFilters(DeleteFileOnErrorFilter)
@Controller('uploads')
export class UploadController { 
    @Post('/subscribe-file')
    @UseInterceptors(diskFileInterceptor('laudo'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Res({passthrough:true}) response:Response){
        console.log(file)
        return {filePath:file.path}
    }
    }
