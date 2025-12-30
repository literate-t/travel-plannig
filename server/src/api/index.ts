import { Router } from "express";
import cityRouter from "./city.js";

const apiRouter = Router();

apiRouter.use("/cities", cityRouter);

export default apiRouter;
