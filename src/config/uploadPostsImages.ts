import multer from 'multer';
import path from 'path';

export default{
    storage:multer.diskStorage({
        destination: path.join(__dirname,"..","..","uploads","postsImages"),
        filename: (req, file, cb)=>{
            const filename = `${Date.now()}-postImage-${file.originalname}`

            cb(null, filename)
        }
    })
}