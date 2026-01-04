import { Router } from "express";
import { City } from "../entity/city.entity.js";
import { CityRepository } from "../repository/city.repository.js";
import { CityDto } from "../types.js";

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
  const city = req.body as CityDto;
  try {
    const result = await CityRepository.save(City.ofDto(city));
    res.send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
});

export default cityRouter;
