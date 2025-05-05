import { tablero } from "./modelo";
import { iniciaPartida } from "./motor";
import { renderTablero } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("iniciar-partida") as HTMLButtonElement;
  const mensaje = document.getElementById("mensaje-final");

  boton?.addEventListener("click", () => {
    mensaje?.classList.remove("visible");

    iniciaPartida(tablero);
    renderTablero(tablero);
  });
});
