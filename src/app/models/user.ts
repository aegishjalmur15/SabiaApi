import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import bcrypt from 'bcryptjs';
import Posts from "./posts"
@Entity('users')

class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashpassword(){
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @Column()
    name: string;

    @Column()
    userImage: string;
    
    @Column()
    banner: string;

    @Column()
    about: string;

    @BeforeInsert()
    private setCreateDate(): void {
    this.createAt = new Date();
  }
    @Column({ name: "createdAt"})
    createAt: Date;


    @OneToMany(()=> Posts, posts => posts.user,
    {cascade: ["insert", "update"]})
    @JoinColumn({ name: 'user_Id' })
    posts: Posts[];
}

export default User;