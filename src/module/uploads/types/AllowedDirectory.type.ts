
export const allowedDirectories = ['laudo'] as const
export type AllowedDirectoryType =(typeof allowedDirectories[number])
