import { Request, Response } from "express";
import * as menuService from "../services/menuService";
import MenuItem from "../models/menuItem";

export const addMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem = await menuService.createMenuItem(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar ítem al menú." });
  }
};

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.status(200).json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener ítems del menú." });
  }
};
