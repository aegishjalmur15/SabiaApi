import User from '../models/user'
import Images from '../models/images'
export default {

        renderAvatar(user: User){
        return {
            userImageUrl: `http://localhost:${process.env.PORT}/uploads/userImages/${user.userImage}`
        }
    },
    renderPostImages(image: Images){
        return{
            imageUrl: `http://localhost:${process.env.PORT}/uploads/postsImages/${image.path}`
        }
    },
    renderManyPostsImages(images: Images[]){
        return images.map(image=> {
            return this.renderPostImages(image)
        })

    },
    renderBanner(user: User){
        return {
            userImageUrl: `http://localhost:${process.env.PORT}/uploads/Banner/${user.banner}`
        }
    }
}