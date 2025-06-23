import { TipoIva } from "../models";

const porcentajeIva = new Map<TipoIva, number>([
  ["general", 0.21],
  ["reducido", 0.1],
  ["superreducidoA", 0.05],
  ["superreducidoB", 0.04],
  ["superreducidoC", 0],
  ["sinIva", 0],
]);

export const obtenerPorcentajeIva = (tipo: TipoIva): number => {
  if (!tipo) {
    throw new Error("Tipo de IVA no válido");
  }
  const porcentaje = porcentajeIva.get(tipo);

  if (porcentaje === undefined) {
    throw new Error("Tipo de IVA no válido");
  }

  return porcentaje;
};
