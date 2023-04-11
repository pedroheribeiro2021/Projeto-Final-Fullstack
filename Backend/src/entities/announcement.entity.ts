import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Image } from "./image.entity";
import { Brand } from "./brand.entity";
import { Model } from "./model.entity";
import { Year } from "./year.entity";
import { Fuel } from "./fuel.emtity";



@Entity('announcements')
export class Announcement {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    mileage: number

    @Column({ length: 50 })
    color: string

    @Column()
    FIPE_priceTable: number

    @Column()
    price: number

    @Column()
    isActive: boolean

    @Column()
    isSuperBuy: boolean

    @CreateDateColumn()
    createdAt: string

    @ManyToOne(() => User, user => user.announcements)
    user: User

    @OneToMany(() => Comment, comment => comment.announcement)
    comments: Comment[]

    @OneToMany(() => Image, image => image.announcement)
    images: Image[]

    @OneToMany(() => Brand, brand => brand.announcement)
    brands: Brand[]

    @OneToMany(() => Model, model => model.announcement)
    models: Model[]

    @OneToMany(() => Year, year => year.announcement)
    years: Year[]

    @OneToMany(() => Fuel, fuel => fuel.announcement)
    fuels: Fuel[]
}