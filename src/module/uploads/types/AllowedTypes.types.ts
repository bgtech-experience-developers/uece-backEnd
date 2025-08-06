// export enum AllowedFileTypesEnum {
//     pdfFile= "application/pdf",
//     imgFile = /^image\/(png|jpg|jpeg|gif|webp|bmp)$/i,
//     docsFile ='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
// }
export const AllowedFileTypesEnum = {
  pdfFile: /application\/pdf/i,
  docFile: /application\/msword/i,
  docxFile: /application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document/i,
  images: 'image/png',
  filesAvailable: /^(image\/(jpeg|png)|application\/pdf|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/

} as const;


export type AllowedFileTypes = keyof typeof AllowedFileTypesEnum