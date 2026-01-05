import { Column } from "typeorm";

export class Visa {
  @Column({ type: "boolean" })
  required!: boolean;

  @Column({ type: "bigint" })
  duration!: number;
}
