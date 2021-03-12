import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import User from './user'
import Images from './images'
@Entity('posts')
class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Content: string;

    @BeforeInsert()
    private setCreateDate(): void {
    this.createAt = new Date();
  }
    @Column({ name: "createdAt"})
    createAt: Date;

    @ManyToOne(()=> User, user=> user.posts,)
    @JoinColumn({ name:'user_Id' })
    user: User;

    @OneToMany(()=> Images, image=> image.post,{
        cascade: ["insert", "update"]})
    @JoinColumn({ name:'posts_Id' })
    images: Images[]

}

export default Posts;