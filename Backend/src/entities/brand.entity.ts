import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('brands')
export class Brand {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50 })
    brand: string

    @ManyToOne(() => Announcement, announcement => announcement.brands)
    announcement: Announcement
}