import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/user';
import Posts from '../models/posts';

class postsController{

    async store(req: Request , res: Response){

        const {id, Content} = req.body;
        const requestedFIles = req.files as Express.Multer.File[];
        const images = requestedFIles.map((image =>{
            return { path: image.filename}
        }))

        const repository = getRepository(User);
        const user = await repository.findOne({ id: id })
        
        
        const postsRepo = getRepository(Posts);
        const createPost = postsRepo.create({ 
            Content,
            user,
            images
        })
        await postsRepo.save(createPost)
        return res.json('...')
    };
    async delete( req: Request, res: Response){

        const { id } = req.body

        const repository = getRepository(Posts)

        await repository.delete({id})

        res.sendStatus(200)
    }

}
export default new postsController