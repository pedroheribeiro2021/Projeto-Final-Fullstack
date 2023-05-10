import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Announcement } from "./announcement.entity";


@Entity('fuels')
export class Fuel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 3 })
    fuel: string

    @OneToMany(() => Announcement, announcement => announcement.fuel)
    announcements: Announcement
}