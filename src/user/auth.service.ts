import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,

    ) {}

    signup(email: string, password: string){
        const email_check = this.userService.findEmail(email)
        if(email_check){
            throw new BadRequestException(`${email} already exists`)
        }

        return this.userService.create(email,password)
    }

    signin(email: string, password: string){
        
    }
}