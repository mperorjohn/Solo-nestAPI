import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
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
    signin() { // Added explicit return type
        return this.authService.signin();
    }

    // fetch all users
    @Get('getusers')
    getUsers() {
        return this.authService.getUsers();
    }

    // fetch a single user
    @Get('getuser/:id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.authService.getUser(id);
    }
}
