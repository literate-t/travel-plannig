import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Visa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "boolean" })
  required!: boolean;

  @Column({ type: "bigint" })
  duration!: number;
}
