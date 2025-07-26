import { Prisma } from "@prisma/client";

export type createdUser = Prisma.usersGetPayload<{
    omit: {update_at: true}
}>