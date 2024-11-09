import { Post } from "src/posts/posts.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Meta{

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:'varchar',
        length:200,
        nullable:false,
        unique:true
    })
    name:string

    @Column({
        type:'varchar',
        length:200,
        nullable:false,
        unique:true
    })
    slug:string


    @CreateDateColumn()
    createdAt:Date

    @CreateDateColumn()
    updatedAt:Date

    @OneToOne(()=>Post,(post)=>post.meta,{
        onDelete:'CASCADE'
    })
    @JoinColumn()
    post:Post

}