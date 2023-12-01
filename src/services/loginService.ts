import { User } from './../models/user.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginService {

    static async login(user: User) {
        try {
            const foundUser = await User.findOne({ where: { email: user.email } });

            if (!foundUser) {
                return false;
            }
                const matchUser = bcrypt.compareSync(user.password, foundUser.password);
                const SECRET_KEY = "my-library-secret";

                if (matchUser) {
                    const token = jwt.sign({ id: foundUser.id.toString(), name: foundUser.id }, SECRET_KEY, {
                        expiresIn: '2 days',
                    });

                    return { user: { id: foundUser.id, name: foundUser.name }, token: token }
                }
                else {
                    return false;
                }

        } catch (err) {
            throw err;
        }
    }
}