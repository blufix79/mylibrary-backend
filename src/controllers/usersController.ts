import { User } from './../models/user.model';
import express from 'express'
import { Book } from './../models/book.model';
import bcrypt from 'bcrypt';

export class UsersContrller {

    async index(req: express.Request, res: express.Response) {
        const users = await User.findAll();
        return res.status(200).json(users);
    }

    async store(req: express.Request, res: express.Response) {
        try{
            User.beforeCreate(async (user, options)=>{
                const saltRounds = 8;
                user.password = await bcrypt.hash(user.password,saltRounds);
            })
            let user: User = req.body as User;
            user = await User.create(user);
            res.json(user);

        } catch (err) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async show(req: express.Request, res: express.Response) {

        try{
            const userId = req.params.userId;
            const user = await User.findByPk(userId,{include: [Book]});
            res.json(user.books);
        } catch (err){
            res.status(500).json({ message: 'Errore del server' });
        }
    }
}