import multer from 'multer';
import path from 'path';

export default{
    storage:multer.diskStorage({
        destination: path.join(__dirname,"..","..","uploads","Banner"),
        filename: (req, file, cb)=>{
            const filename = `${Date.now()}-Banner-${file.originalname}`

            cb(null, filename)
        }
    })
}