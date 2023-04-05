import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('years')
export class Year {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 4 })
    year: string

    @ManyToOne(() => Announcement, announcement => announcement.years)
    announcement: Announcement
}