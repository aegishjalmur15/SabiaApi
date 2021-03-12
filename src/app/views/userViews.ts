import User from '../models/user';
import renderImage  from './imagesViews'
import renderPosts from './postsView'
export default {
    render(user: User){
        return {
            id: user.id,
            name: user.name,
            userImage: renderImage.renderAvatar(user),
            banner: renderImage.renderBanner(user),
            about: user.about,
            posts: renderPosts.renderMany(user.posts),
            email: user.email,
        }
    },
    renderMany(users: User[]){
        return users.map(user=>{
            return this.render(user)
        })
    }
}
