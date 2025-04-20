import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
// Removed unused 'sign' import


@Controller('auth')

export class AuthController {
   
    constructor(private authService: AuthService) {}

    @Post('signup')
    // Removed unused 'sign' import
    signUp() {
       return "Sign-up method called";
    }


    @Post('signin')
    // Removed unused 'sign' import
    signIn() {
        // Implement sign-in logic here
        return "Sign-in method called";
    }
}
