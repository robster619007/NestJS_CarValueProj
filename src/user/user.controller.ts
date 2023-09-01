import { Controller, Body,Param, Post, Get,Delete, Query, Patch, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('auth')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}
    @Post('/signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        const { email, password } = createUserDto;
        return this.userService.create(email, password);
    }

    @Post('/login')
    signInUser(@Body() createUserDto: CreateUserDto) {
    }

    @Get('/user/:id')
    getUser(@Param('id')id: number){
        return this.userService.findOne(id);
    }

    @Get('/user')
    getUserByEmail(@Query('email')email:string){
        return this.userService.findEmail(email)
    }

    @Patch('/user/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        console.log(updateUserDto)
        return this.userService.update(+id, updateUserDto);
    }

    @Delete('user/:id')
    deleteUser(@Param('id') id: number){
        return this.userService.remove(id)
    }



}
