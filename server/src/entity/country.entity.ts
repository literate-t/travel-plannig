import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Visa } from "../embedded/visa.js";
import { Continent, CountryDto, VisaDto } from "../types.js";

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  code!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  nameEn!: string;

  @Column({ type: "int8" })
  voltage!: number;

  @Column(() => Visa)
  visa!: Visa;

  @Column({ type: "varchar" })
  continent!: Continent;

  static of(
    code: string,
    name: string,
    nameEn: string,
    voltage: number,
    visa: VisaDto,
    continent: Continent
  ) {
    const newCountry = new Country();
    newCountry.code = code;
    newCountry.name = name;
    newCountry.nameEn = nameEn;
    newCountry.voltage = voltage;
    const newVisa = new Visa();
    newVisa.required = visa.required;
    newVisa.duration = visa.duration;
    newCountry.visa = newVisa;
    newCountry.continent = continent;
    return newCountry;
  }

  static ofDto(dto: CountryDto) {
    return this.of(
      dto.code,
      dto.name,
      dto.nameEn,
      dto.voltage,
      dto.visa,
      dto.continent
    );
  }
}
