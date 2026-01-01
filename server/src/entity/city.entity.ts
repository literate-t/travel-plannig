import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CityDto } from "../types.js";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  city!: string;

  @Column({ type: "text" })
  description!: string;

  static of(name: string, city: string, description: string): City {
    const newCity = new City();
    newCity.name = name;
    newCity.city = city;
    newCity.description = description;
    return newCity;
  }

  static ofDto(dto: CityDto): City {
    return City.of(dto.name, dto.city, dto.description);
  }
}
