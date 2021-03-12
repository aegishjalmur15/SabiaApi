import { Response, Request} from 'express';
import { getRepository } from "typeorm";
import User from '../models/user'
import userViews from '../views/userViews';
import fs from 'fs';
import path from 'path';

class userController{
    async index(req: Request, res: Response){
        const {id} = req.body;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({where:id,
            relations: ["posts","posts.images"]
        }) as User;
        res.json(userViews.render(user))
    }
    async store(req: Request, res: Response){
        const repository = getRepository(User);

        const { email, password, name } = req.body;

        const userExists = await repository.findOne({ where: { email }})

        if(userExists){
            return res.sendStatus(409);
        }
        const  { filename } = req.file as Express.Multer.File
        const userImage = filename


        const user = repository.create({ email, password, name, userImage });
        await repository.save(user)

        return res.json(user)
    }
    async update( req: Request, res: Response){

        const update = req.body
        const repository =  getRepository(User)
           
        await repository.update(update.id,update)

        return res.sendStatus(200)
    }
    async updateUserImage(req: Request, res: Response) {

        const { id } = req.body
        const { filename } = req.file as Express.Multer.File
        const repository = getRepository(User)
        const [oldImageName] = await repository.find({select: ['userImage'], where:{id: id}})
        const deletePath = path.join(__dirname,'..','..','..','uploads','userImages',oldImageName.userImage)
        fs.unlink(deletePath,(err)=>{
            console.log(err)
            return
        })

        await repository.update({id}, { userImage: filename })
        
        return res.sendStatus(200)
    }
    async updateBanner(req: Request, res: Response) {

        const { id } = req.body
        const { filename } = req.file as Express.Multer.File

        const repository = getRepository(User)
        const [oldImageName] = await repository.find({where: id})

        if(oldImageName.banner) {
            const deletePath = path.join(__dirname,'..','..','..','uploads','Banner',oldImageName.banner)
        fs.unlink(deletePath,(err)=>{
            console.log(err)
            return
        })
        }
        

        await repository.update({id}, { banner: filename })
        
        return res.sendStatus(200)
    }

}

export default new userController();