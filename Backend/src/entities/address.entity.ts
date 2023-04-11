import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('addresses')
export class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 8 })
    cep: string

    @Column({ length: 2 })
    state: string

    @Column({ length: 50 })
    city: string

    @Column({ length: 100 })
    street: string

    @Column({ length: 5 })
    number: string

    @Column({ length: 100, nullable: true })
    complement: string
}