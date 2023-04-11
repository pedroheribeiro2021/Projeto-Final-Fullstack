import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('models')
export class Model {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    model: string

    @ManyToOne(() => Announcement, announcement => announcement.models)
    announcement: Announcement
}