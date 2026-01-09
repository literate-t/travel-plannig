import { AppDataSource } from "../../database/datasource.js";
import { Place } from "../entity/place.entity.js";

export const PlaceRepository = AppDataSource.getRepository(Place);
