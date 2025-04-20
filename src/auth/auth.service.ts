import { Injectable } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){

    }


   async signup (dto: AuthDto) {
        // generate the password hash
        const hash = await argon.hash(dto.password);


        // save the new user in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        // send back the user
        return user;
    }
    signin () {


        let data = {
            status: true,
            code: 200,
            message: "John !! Sign in method was called",
            data: null,
            // error: null
        }
        return {data}
}}

