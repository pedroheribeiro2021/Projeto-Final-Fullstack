import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('fuels')
export class Fuel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 3 })
    fuel: string

    @ManyToOne(() => Announcement, announcement => announcement.fuels)
    announcement: Announcement
}