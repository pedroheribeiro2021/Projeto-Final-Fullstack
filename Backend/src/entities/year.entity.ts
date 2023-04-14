import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('years')
export class Year {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 4 })
    year: string

    @OneToMany(() => Announcement, announcement => announcement.year)
    announcements: Announcement
}