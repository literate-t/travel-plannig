import { Router } from "express";
import { Country } from "../entity/country.entity.js";
import { CounrtyRepository } from "../repository/country.repository.js";
import { CountryDto } from "../types.js";

const countryRouter = Router();

countryRouter.get("/", async (req, res) => {
  try {
    const result = await CounrtyRepository.find();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

countryRouter.post("/", async (req, res) => {
  const country = req.body as CountryDto;
  try {
    const result = await CounrtyRepository.save(Country.ofDto(country));
    res.send(result);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
});

export default countryRouter;
