import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import  { Users } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) {}

    async create(email: string, password: string) {
        const user = this.userRepository.create({email, password});
        return await this.userRepository.save(user);
    }

    async findOne(id: number) {
        return await this.userRepository.findOne({where:{id:id}});
    }

    async findEmail(email: string) {
        return await this.userRepository.find({where:{email:email}})
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = this.findOne(id)
        if (!user) {
            throw new NotFoundException(`User with ${id} does not exist`)
        }
        console.log(id, updateUserDto);
        return await this.userRepository.update(id,updateUserDto);
    }

    async remove(id: number) {
        const rem_user = this.userRepository.find({where: {id:id}})
        if(!rem_user){
            throw new NotFoundException(`User with id ${id} does not exist`)
        }
        await this.userRepository.delete(id);
    }

    // async login()
}
