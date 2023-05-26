require("dotenv").config();

import { Sequelize } from "sequelize";
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  port: process.env.DB_PORT,
});

export default db;
