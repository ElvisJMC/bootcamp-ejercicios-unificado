import { tablero } from "./modelo";
import { iniciaPartida } from "./motor";
import { renderTablero } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("iniciar-partida");
  const mensaje = document.getElementById("mensaje-final");

  if (boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", () => {
      if (mensaje instanceof HTMLElement) {
        mensaje.classList.remove("visible");
      }

      iniciaPartida(tablero);
      renderTablero(tablero);
    });
  }
});
