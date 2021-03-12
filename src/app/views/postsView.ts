import Posts from '../models/posts'
import render from './imagesViews'

export default {
    
    render(post: Posts){
        let images;
        if(post.images){
            images = render.renderManyPostsImages(post.images)
        }
        else{
            images = []
        }
        return {
            id : post.id,
            Content: post.Content,
            images: images,
        }
    },
    renderMany(posts: Posts[]){
        return posts.map(post=>{
            return this.render(post);
        })
    }
}