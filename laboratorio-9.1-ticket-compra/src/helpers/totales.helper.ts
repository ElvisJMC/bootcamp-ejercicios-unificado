import {
  ResultadoTotalTicket,
  TotalPorTipoIva,
  ResultadoLineaTicket,
  TipoIva,
} from "../models";

export const calcularTotales = (
  lineas: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  if (!lineas) {
    throw new Error("Las líneas de ticket no son válidas");
  }

  const resultado = lineas.reduce(
    (acumulador, linea) => {
      acumulador.totalSinIva += linea.precioSinIva;
      acumulador.totalConIva += linea.precioConIva;
      return acumulador;
    },
    { totalSinIva: 0, totalConIva: 0, totalIva: 0 }
  );

  // Redondear a 2 decimales
  resultado.totalSinIva = parseFloat(resultado.totalSinIva.toFixed(2));
  resultado.totalConIva = parseFloat(resultado.totalConIva.toFixed(2));
  resultado.totalIva = parseFloat(
    (resultado.totalConIva - resultado.totalSinIva).toFixed(2)
  );

  return resultado;
};

export const calcularDesglosePorTipoIva = (
  lineas: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  if (!lineas) {
    throw new Error("Las líneas de ticket no son válidas");
  }

  const acumulador = new Map<TipoIva, number>();

  lineas.forEach((linea) => {
    const tipo = linea.tipoIva;
    const iva = parseFloat(
      (linea.precioConIva - linea.precioSinIva).toFixed(2)
    );

    const valorActual = acumulador.get(tipo) ?? 0;
    acumulador.set(tipo, parseFloat((valorActual + iva).toFixed(2)));
  });

  const resultado: TotalPorTipoIva[] = [];

  acumulador.forEach((cuantia, tipoIva) => {
    resultado.push({ tipoIva, cuantia });
  });

  return resultado;
};
