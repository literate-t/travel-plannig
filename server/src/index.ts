import express from "express";
import "reflect-metadata";
import { AppDataSource } from "../database/datasource.js";
import apiRouter from "./api/index.js";

await (async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use("/api", apiRouter);
  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  try {
    await AppDataSource.initialize();
    console.log("Datasource succeeded");
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Datasource failed");
  }
})();
