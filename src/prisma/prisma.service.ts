import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgresql://nest_api_user:S3cur3P@ssw0rd!@localhost:5432/nestdb?schema=public"
                },
            },
        });
    }
}
