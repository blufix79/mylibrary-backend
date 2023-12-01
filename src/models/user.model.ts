import { Table,Column,Model,HasMany,ForeignKey } from "sequelize-typescript";
import { Book } from "./book.model";


@Table
export class User extends Model<User>{
    
    @Column({primaryKey:true,autoIncrement:true})
    id: number;

    @Column
    name: string;

    @Column
    lastname: string;
    
    @Column
    email: string;

    @Column
    password: string;

    @HasMany(()=>Book)
    books: Book[];
}