import { User } from './../models/user.model';
import { LoginService } from './../services/loginService';
import express from 'express';


export class LoginController {
    
    async index(req: express.Request, res: express.Response ) {

    }

    async loginOne(req: express.Request, res: express.Response ) {

        try {
            const user: User = req.body as User;
            const foundUser = await LoginService.login(user);

            if(!foundUser){
                res.status(401).send('Unauthorized');
            }

            res.status(200).json(foundUser);
        } catch (err) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

}