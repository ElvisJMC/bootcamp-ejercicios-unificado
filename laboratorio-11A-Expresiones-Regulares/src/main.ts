import { procesarIBAN, validarIBAN } from "./motor";
import { mostrarResultado, obtenerValorIBAN } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("validar-boton");
  if (boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", manejarValidarIBAN);
  }
});

const manejarValidarIBAN = (): void => {
  try {
    const iban = obtenerValorIBAN();
    validarIBAN(iban);
    const { partes, banco } = procesarIBAN(iban);
    mostrarResultado(partes, banco);
  } catch (error) {
    alert((error as Error).message);
  }
};



