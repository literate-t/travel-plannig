import { AppDataSource } from "../../database/datasource.js";
import { Country } from "../entity/country.entity.js";

export const CounrtyRepository = AppDataSource.getRepository(Country);
