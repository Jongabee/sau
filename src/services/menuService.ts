import MenuItem from "../models/MenuItem";

export const createMenuItem = async (data: any) => {
  const { tipo_comida, nne, nombre, gramaje, unidad_medida } = data;
  if (!tipo_comida || !nne || !nombre || !gramaje || !unidad_medida) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const nuevoMenuItem = await MenuItem.create({
    tipo_comida,
    nne,
    nombre,
    gramaje,
    unidad_medida,
  });

  return nuevoMenuItem;
};
