import { Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('images')
export class Image {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    imageUrl: string

    @Column({nullable:true,default:false})
    isCoverImage: boolean

    @ManyToOne(() => Announcement, announcement => announcement.images, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    announcement: Announcement
}