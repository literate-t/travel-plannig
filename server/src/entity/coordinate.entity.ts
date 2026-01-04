import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CityCoordiate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "float" })
  lat!: number;

  @Column({ type: "float" })
  lng!: number;
}
