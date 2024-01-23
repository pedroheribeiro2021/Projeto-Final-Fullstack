import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('brands')
export class Brand {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50 })
    brand: string

    @OneToMany(() => Announcement, announcement => announcement.brand)
    announcements: Announcement
}