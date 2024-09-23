import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class MenuItem extends Model<MenuItemAttributes> implements MenuItemAttributes {
  public id!: number;
  public tipo_comida!: "desayuno" | "almuerzo" | "cena";
  public nne!: string;
  public nombre!: string;
  public gramaje!: number;
  public unidad_medida!: string;
  public created_at!: Date;
}

MenuItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_comida: {
      type: DataTypes.ENUM("desayuno", "almuerzo", "cena"),
      allowNull: false,
    },
    nne: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gramaje: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unidad_medida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "menu_items",
    timestamps: false,
  }
);

export default MenuItem;
