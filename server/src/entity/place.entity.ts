import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coordinate } from "../embedded/coordinate.js";
import { Category } from "../types.js";
import { City } from "./city.entity.js";

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  thumbnail!: string;

  @Column({ type: "varchar" })
  category!: Category;

  @Column({ type: "varchar" })
  address!: string;

  @Column(() => Coordinate)
  coordinate!: Coordinate;

  @Column({ type: "int" })
  likes!: number;

  @Column({
    type: "decimal",
    precision: 3,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  rating!: number;

  @ManyToOne(() => City)
  @JoinColumn()
  city!: City;
}
