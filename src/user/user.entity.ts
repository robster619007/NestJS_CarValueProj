import  { AfterInsert, AfterUpdate, AfterRemove,Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm'
import { UpdateUserDto } from './dto/update-user.dto';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @AfterInsert()
    logInsert() {
        console.log(`Inserted user ${this.email} with id ${this.id}`)
    }
    @AfterUpdate()
    logUpdate(){
        console.log(`Updated record with id ${this.id}`)
    }
    @AfterRemove()
    logRemove(){
        console.log(`Removed record with id ${this.id}`)
    }

}