import { LineaTicket, ResultadoLineaTicket } from "../models";
import { obtenerPorcentajeIva } from "./iva.helper";

export const calcularLineasDelTicket = (
  lineas: LineaTicket[]
): ResultadoLineaTicket[] => {
  if (!lineas) {
    throw new Error("Las líneas de ticket no son válidas");
  }

  return lineas.map((linea) => {
    const { producto, cantidad } = linea;
    const { nombre, precio, tipoIva } = producto;

    const precioSinIva = precio * cantidad;
    const porcentajeIva = obtenerPorcentajeIva(tipoIva);
    const iva = precioSinIva * porcentajeIva;
    const precioConIva = precioSinIva + iva;

    return {
      nombre,
      cantidad,
      precioSinIva: Number(precioSinIva.toFixed(2)),
      tipoIva,
      precioConIva: Number(precioConIva.toFixed(2)),
    };
  });
};
