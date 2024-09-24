import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db_name",
  process.env.DB_USER || "default_user",
  process.env.DB_PASSWORD || "default_password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: (process.env.DB_DIALECT as any) || "postgres",
    logging: false,
  }
);

export default sequelize;
