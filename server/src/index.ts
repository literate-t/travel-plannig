import express from "express";
import { AppDataSource } from "../database/datasource.js";

await (async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  try {
    await AppDataSource.initialize();
    console.log("Datasource succeeded");
  } catch (err) {
    console.error("Datasource failed");
  }

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
})();
