import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Posts from './posts'

@Entity('images')
class Images{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    path: string;

    @BeforeInsert()
    private setCreateDate(): void {
    this.createAt = new Date();
  }
    @Column({ name: "createdAt"})
    createAt: Date;


    @ManyToOne(()=> Posts, post =>{
        post.images
    })
    @JoinColumn({ name: 'posts_Id' })
    post: Posts;

}

export default Images