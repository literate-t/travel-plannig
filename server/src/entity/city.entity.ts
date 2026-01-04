import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CityDto, CoordinateDto, CountryDto } from "../types.js";
import { CityCoordiate } from "./coordinate.entity.js";
import { Country } from "./country.entity.js";
import { Visa } from "./visa.entity.js";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  code!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  nameEn!: string;

  @Column({ type: "varchar" })
  thumbnail!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "varchar" })
  timezone!: string;

  @Column({ type: "int8" })
  flighthour!: number;

  @Column({ type: "int8" })
  timezoneOffset!: number;

  @OneToOne(() => CityCoordiate)
  @JoinColumn()
  coordinate!: CityCoordiate;

  @ManyToOne(() => Country)
  @JoinColumn()
  country!: Country;

  static of(
    code: string,
    name: string,
    nameEn: string,
    thumbnail: string,
    description: string,
    timezone: string,
    flighthour: number,
    timezoneOffset: number,
    coordinate: CoordinateDto,
    country: CountryDto
  ): City {
    const newCity = new City();
    newCity.code = code;
    newCity.name = name;
    newCity.nameEn = nameEn;
    newCity.thumbnail = thumbnail;
    newCity.description = description;
    newCity.timezone = timezone;
    newCity.flighthour = flighthour;
    newCity.timezoneOffset = timezoneOffset;

    const newCoord = new CityCoordiate();
    newCoord.lat = coordinate.lat;
    newCoord.lng = coordinate.lng;
    newCity.coordinate = newCoord;

    const newCountry = new Country();
    newCountry.code = country.code;
    newCountry.name = country.name;
    newCountry.nameEn = country.nameEn;
    newCountry.voltage = country.voltage;

    const newVisa = new Visa();
    newVisa.duration = country.visa.duration;
    newVisa.required = country.visa.required;
    newCountry.visa = newVisa;
    newCountry.continent = country.continent;
    newCity.country = newCountry;

    return newCity;
  }

  static ofDto(dto: CityDto): City {
    return this.of(
      dto.code,
      dto.name,
      dto.nameEn,
      dto.thumbnail,
      dto.description,
      dto.timezone,
      dto.flighthour,
      dto.timezoneOffset,
      dto.coordinate,
      dto.country
    );
  }
}
