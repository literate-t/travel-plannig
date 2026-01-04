import { Router } from "express";
import cityRouter from "./city.js";
import countryRouter from "./country.js";

const apiRouter = Router();

apiRouter.use("/cities", cityRouter);
apiRouter.use("/countries", countryRouter);

export default apiRouter;
