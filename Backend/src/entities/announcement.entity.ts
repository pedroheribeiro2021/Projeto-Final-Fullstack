import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Image } from "./image.entity";
import { Brand } from "./brand.entity";
import { Model } from "./model.entity";
import { Year } from "./year.entity";
import { Fuel } from "./fuel.emtity";

@Entity("announcement")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  mileage: number;

  @Column({ length: 50 })
  color: string;

  @Column()
  FIPE_priceTable: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  isSuperBuy: boolean;

  @CreateDateColumn()
  createdAt: string;

  @ManyToOne(() => User, (user) => user.announcements, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Comment, (comment) => comment.announcement)
  comments: Comment[];

  @OneToMany(() => Image, (image) => image.announcement)
  images: Image[];

  @ManyToOne(() => Brand, (brand) => brand.announcements.id, {
    onDelete: "CASCADE",
  })
  brand: Brand;
  @JoinColumn()
  @ManyToOne(() => Model, (model) => model.announcements.id, {
    onDelete: "CASCADE",
  })
  model: Model;
  @JoinColumn()
  @ManyToOne(() => Year, (year) => year.announcements.id, {
    onDelete: "CASCADE",
  })
  year: Year;
  @JoinColumn()
  @ManyToOne(() => Fuel, (fuel) => fuel.announcements.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  fuel: Fuel;
}
