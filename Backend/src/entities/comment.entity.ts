import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Announcement } from "./announcement.entity";


@Entity('comments')
export class Comment {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 255 })
    description: string

    @CreateDateColumn()
    createdAt: string

    @ManyToOne(() => User, user => user.comments, {
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    user: User

    @ManyToOne(() => Announcement, announcement => announcement.comments)
    announcement: Announcement
}