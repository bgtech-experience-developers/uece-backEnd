import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@Injectable()
export class BcryptService {
    async verifyHash(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }

    async hash(textTohash: string, salts: number = 11) {
        return await bcrypt.hash(textTohash, salts);
    }
}