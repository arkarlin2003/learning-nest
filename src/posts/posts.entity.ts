import { Meta } from "src/metas/metas.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Post{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    slug:string

    @Column()
    content:string

    @OneToOne(()=> Meta,(meta)=>meta.post,{
        cascade:true,
        eager:true,
    })
    meta?:Meta
    
}