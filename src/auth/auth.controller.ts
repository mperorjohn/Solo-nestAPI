import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')

export class AuthController {
   
    constructor(private readonly authService: AuthService) {} // Added readonly modifier

    @Post('signup')
    signup(@Body() dto: AuthDto ) {
       return this.authService.signup(dto);
    }

    @Post('signin')
    signin(): any { // Added explicit return type
        return this.authService.signin();
    }
}
