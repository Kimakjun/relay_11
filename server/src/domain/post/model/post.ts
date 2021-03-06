import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { EnrollYear } from "../../school/model/enroll-year";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    year!: string;

    @Column()
    title!: string;

    @Column()
    writer!: string;

    @Column()
    content!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @ManyToOne(type => EnrollYear)
    enrollYear!: EnrollYear;
}
