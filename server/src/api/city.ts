import { Router } from "express";
import { ILike } from "typeorm";
import { CityRepository } from "../repository/city.repository.js";
import { CounrtyRepository } from "../repository/country.repository.js";
import { CreateCityDto } from "../types.js";

const cityRouter = Router();

cityRouter.get("/", async (_req, res) => {
  try {
    const cities = await CityRepository.find({
      relations: ["country"],
    });
    if (!cities || cities.length === 0) {
      res.status(404).send("City not found");
    } else {
      const result = cities.map((city) => ({ ...city }));
      res.send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

cityRouter.get("/search", async (req, res) => {
  const { q } = req.query;
  if (typeof q !== "string") {
    return res.status(400).send("Invalid Query");
  }

  const cities = await CityRepository.find({
    where: {
      name: ILike(`%${q}%`),
    },
    relations: ["country"],
  });

  if (!cities || cities.length === 0) {
    res.status(400).send("No cities");
  }

  // to plain object
  res.send([...cities]);
});

cityRouter.get("/:city", async (req, res) => {
  try {
    const city = await CityRepository.findOne({
      where: {
        code: req.params.city,
      },
      relations: ["country"],
    });
    if (!city) {
      res.status(404).send("City not found");
    } else {
      res.send({ ...city });
    }
  } catch (err) {
    console.log("Error", err);
    res.status(500).send("Can't find data");
  }
});

cityRouter.post("/", async (req, res) => {
  const { countryCode, ...city } = req.body as CreateCityDto;
  const findCountry = await CounrtyRepository.findOneBy({
    code: countryCode,
  });
  if (!findCountry) {
    res.status(404).send("Country not found");
    return;
  }

  const newCity = CityRepository.create({
    ...city,
    country: findCountry,
  });

  try {
    const result = await CityRepository.insert(newCity);
    res.send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
});

export default cityRouter;
