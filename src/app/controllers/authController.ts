import bcrypt from 'bcryptjs';
import { Response, Request} from 'express';
import { getRepository } from "typeorm";
import jwt from 'jsonwebtoken'
import User from '../models/user'

class authController{
    async authenticate(req: Request, res: Response){
        const repository = getRepository(User);

        const { email, password } = req.body;
        const user = await repository.findOne({ where: { email }})
        if(!user){
            return res.sendStatus(401);
        }

        const isValidePassword = await bcrypt.compare(password, user.password)

        if(!isValidePassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({ id: user.id }, process.env.HASH_KEY, { expiresIn: '1d' })

        return res.json({
            token
        })
    }

}

export default new authController();