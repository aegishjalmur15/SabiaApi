import { Router } from 'express';
import multer from 'multer';
import authController from './app/controllers/authController';
import postsController from './app/controllers/postsController';
import userController from './app/controllers/userController';
import authMiddleware from './app/middlewares/authMiddleware';
import uploadUserImagesConfig from "./config/uploadUserImage"
import uploadPostsImagesConfig from './config/uploadPostsImages'
import uploadBannerConfig from './config/uploadBanner'
const Routes = Router()


const uploadUserImages = multer(uploadUserImagesConfig);
const uploadPostsImages = multer(uploadPostsImagesConfig)
const uploadBanner = multer(uploadBannerConfig)

Routes.post('/users', uploadUserImages.single('userImage'),userController.store)
Routes.post('/auth', authController.authenticate)
Routes.post('/main', authMiddleware,userController.index)
Routes.put('/updateUser', userController.update)
Routes.put('/updateUserImage', uploadUserImages.single('userImage'), userController.updateUserImage)
Routes.put('/updateBanner', uploadBanner.single('banner'), userController.updateBanner)
Routes.put('/posts',  uploadPostsImages.array('images'), postsController.store)
Routes.delete('/posts', postsController.delete)
Routes.get('/test', (req,res) => {
    res.json({message: 'succes'})
})

export default Routes;