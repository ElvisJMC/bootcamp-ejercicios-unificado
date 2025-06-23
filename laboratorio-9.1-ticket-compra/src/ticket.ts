import { LineaTicket, TicketFinal } from "./models";
import { calcularLineasDelTicket } from "./helpers/lineas.helper";
import {
  calcularTotales,
  calcularDesglosePorTipoIva,
} from "./helpers/totales.helper";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineasDeTicket = calcularLineasDelTicket(lineasTicket);
  const totales = calcularTotales(lineasDeTicket);
  const desglose = calcularDesglosePorTipoIva(lineasDeTicket);

  return {
    lineas: lineasDeTicket,
    total: totales,
    desgloseIva: desglose,
  };
};
