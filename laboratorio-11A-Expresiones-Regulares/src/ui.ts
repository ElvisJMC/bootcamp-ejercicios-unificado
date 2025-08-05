import { PartesIBAN } from "./modelo";

export const obtenerValorIBAN = (): string => {
  const input = document.getElementById("iban-input");
  if (!(input instanceof HTMLInputElement)) {
    throw new Error("No se pudo obtener el input");
  }
  return input.value;
};

export const mostrarResultado = (partes: PartesIBAN, banco: string): void => {
  const contenedor = document.getElementById("resultado");
  if (!(contenedor instanceof HTMLElement)) return;

  contenedor.innerHTML = `
    <p><strong>Banco:</strong> ${banco}</p>
    <p><strong>País:</strong> ${partes.pais}</p>
    <p><strong>Código de control:</strong> ${partes.digitoControl}</p>
    <p><strong>Código de banco:</strong> ${partes.banco}</p>
    <p><strong>Oficina:</strong> ${partes.oficina}</p>
    <p><strong>Dígito de control cuenta:</strong> ${partes.dcCuenta}</p>
    <p><strong>Número de cuenta:</strong> ${partes.cuenta}</p>
  `;
};
