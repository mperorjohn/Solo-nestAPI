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
                firstName: true,
                lastName: true,
            }
        });

        // delete  user.hash; 

        return user;
    }
    async getUsers () {

        // fetch all users
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                firstName: true,
                lastName: true,
            }
        })
        // console.log(users);
        return users;
    }

    // get single user 
    async getUser(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                firstName: true,
                lastName: true,
            }
        })
        return user;
    }


    signin() {}
}

