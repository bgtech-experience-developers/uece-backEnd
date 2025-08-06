import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseFilters, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskFileInterceptor } from "./interceptors/upload.interceptor";
import DeleteFileOnErrorFilter from "src/error/deleteFIlesOnError";
@UseFilters(DeleteFileOnErrorFilter)
@Controller('upload')
export class UploadController {

    
    @Post()
    @UseInterceptors(diskFileInterceptor())
    async uploadFile(@UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 10485760}),
                new FileTypeValidator({fileType: /^image\/(jpeg|jpg|png)$|^application\/pdf$/}),
            ]
        })
    ) file: Express.Multer.File) {
        console.log(file);
        
    }
}