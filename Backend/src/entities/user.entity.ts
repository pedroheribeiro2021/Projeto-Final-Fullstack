import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from "bcrypt";
import { Exclude } from "class-transformer";
import { Address } from "./address.entity";
import { Announcement } from "./announcement.entity";
import { Comment } from "./comment.entity";



@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 100 })
    @Exclude()
    password: string

    @Column({ nullable: true })
    reset_token: string

    @Column({ length: 11, unique: true })
    cpf: string

    @Column({ length: 12 })
    cellPhone: string

    @Column()
    birthday: string

    @Column({ length: 255, nullable: true })
    description: string

    @Column()
    is_advertiser: boolean

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => Address, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    address: Address

    @OneToMany(() => Announcement, announcement => announcement.user.id)
    announcements: Announcement[]

    @OneToMany(() => Comment, comments => comments.user)
    comments: Comment[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

}