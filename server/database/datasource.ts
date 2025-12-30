import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import "reflect-metadata";
import { DataSource } from "typeorm";

dotenvExpand.expand(dotenv.config());

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTRGES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ["dist/server/entity/**/*.js"],
  migrations: ["dist/database/migration/**/*.js"],
});
