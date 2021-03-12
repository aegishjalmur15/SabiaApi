import multer from 'multer';
import path from 'path';

export default{
    storage:multer.diskStorage({
        destination: path.join(__dirname,"..","..","uploads","userImages"),
        filename: (req, file, cb)=>{
            const filename = `${Date.now()}-userImage-${file.originalname}`

            cb(null, filename)
        }
    })
}