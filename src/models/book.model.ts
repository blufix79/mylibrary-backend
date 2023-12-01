import { User } from './user.model';
import { Table,Column,Model,HasMany,ForeignKey, BelongsTo } from "sequelize-typescript";

@Table
export class Book extends Model<Book>{

    @Column({primaryKey: true, autoIncrement: true})
    id: number;

    @Column
    title: string;

    @Column
    author: string;
    
    @Column
    ISBN: string;
    
    @Column
    dateAdd: Date;
    
    @Column
    dateRem?: Date;
    
    @Column
    plot: string;

    @Column
    readingsNumber: number;

    @Column
    @ForeignKey(()=>User)
    userId: number;

    @BelongsTo(()=>User)
    user: User;
}