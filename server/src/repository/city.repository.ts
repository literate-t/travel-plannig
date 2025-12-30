import { AppDataSource } from "../../database/datasource.js";
import { City } from "../entity/city.entity.js";

export const CityRepository = AppDataSource.getRepository(City).extend({
  async findAll() {
    return this.find();
  },
  async findByName(name: string) {
    return this.findOneBy({
      name,
    });
  },
});
