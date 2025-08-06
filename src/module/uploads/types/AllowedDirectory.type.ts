
export const allowedDirectories = ['edital','profile'] as const
export type AllowedDirectoryType =(typeof allowedDirectories[number])
