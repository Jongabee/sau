interface MenuItemAttributes {
  id?: number;
  tipo_comida: "desayuno" | "almuerzo" | "cena";
  nne: string;
  nombre: string;
  gramaje: number;
  unidad_medida: string;
  created_at?: Date;
}
