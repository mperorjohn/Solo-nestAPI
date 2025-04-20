import { Injectable } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { sign } from 'crypto';
import { User } from 'generated/prisma';

@Injectable({})
export class AuthService {
    signup () {

        let data = {
            status: true,
            code: 200,
            message: "John !! Sign up method was called",
            data: null,
            // error: null

        }
        return {data};
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

