import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sau", "beleenhigueras", "elporoto", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
