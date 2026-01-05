import { Column } from "typeorm";

export class CityCoordiate {
  @Column({ type: "decimal", precision: 10, scale: 7 })
  lat!: number;

  @Column({ type: "decimal", precision: 10, scale: 7 })
  lng!: number;
}
