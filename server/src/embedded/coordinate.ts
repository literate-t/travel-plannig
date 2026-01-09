import { Column } from "typeorm";

export class CityCoordiate {
  @Column({
    type: "decimal",
    precision: 10,
    scale: 7,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  lat!: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 7,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  lng!: number;
}
