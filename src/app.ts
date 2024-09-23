import express, { Application } from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";
import menuRoutes from "./routes/menu";
import morgan from "morgan";

const app: Application = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

sequelize
  .sync()
  .then(() => console.log("Conectado a PostgreSQL y sincronizado"))
  .catch((err) => console.error("Error conectando a la base de datos:", err));

app.use("/menu", menuRoutes);

export default app;
