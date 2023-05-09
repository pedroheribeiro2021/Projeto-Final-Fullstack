import { Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('models')
export class Model {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    model: string

    @OneToMany(() => Announcement, announcement => announcement.model)
    announcements: Announcement
}