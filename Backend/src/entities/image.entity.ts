import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('images')
export class Image {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    imageUrl: string

    @Column()
    isCoverImage: boolean

    @ManyToOne(() => Announcement, announcement => announcement.images)
    announcement: Announcement
}