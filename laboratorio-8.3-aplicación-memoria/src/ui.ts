import { Carta, Tablero } from "./modelo";
import {
  sonPareja,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  parejaNoEncontrada,
  parejaEncontrada,
  esPartidaCompleta,
} from "./motor";

export const renderTablero = (tablero: Tablero): void => {
  const contenedor = document.querySelector(".contenedor");
  if (!(contenedor instanceof HTMLElement)) return;

  contenedor.innerHTML = ""; // Limpia el tablero antes de volver a renderizar

  tablero.cartas.forEach((carta, indice) => {
    const cartaDiv = crearCarta(carta, indice, tablero);
    contenedor.appendChild(cartaDiv);
  });
};

const crearCarta = (
  carta: Carta,
  indice: number,
  tablero: Tablero
): HTMLDivElement => {
  const cartaDiv = document.createElement("div");
  cartaDiv.classList.add("carta");
  if (carta.estaVuelta) {
    cartaDiv.classList.add("vuelta");
  } // Añade esta clase si la carta está boca arriba para que se muestre visualmente.
  cartaDiv.dataset.indice = indice.toString();

  const img = document.createElement("img");
  img.src = carta.imagen;
  img.classList.add("imagen-carta");
  img.style.display = carta.estaVuelta ? "block" : "none";

  cartaDiv.appendChild(img);

  cartaDiv.addEventListener("click", () => clickCarta(tablero, indice));

  return cartaDiv;
};

const clickCarta = (tablero: Tablero, indice: number): void => {
  if (!sePuedeVoltearLaCarta(tablero, indice)) return;

  voltearLaCarta(tablero, indice);
  renderTablero(tablero);
  voltearLaSegundaCarta(tablero);
};

const voltearLaSegundaCarta = (tablero: Tablero): void => {
  if (tablero.estadoPartida === "DosCartasLevantadas") {
    setTimeout(() => {
      const indiceCartaA = tablero.indiceCartaVolteadaA!;
      const indiceCartaB = tablero.indiceCartaVolteadaB!;

      if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
        parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
        renderTablero(tablero);
        if (esPartidaCompleta(tablero)) {
          mostrarMensajeFinal();
        }
      } else {
        parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
        renderTablero(tablero);
      }
    }, 1000);
  }
};

const mostrarMensajeFinal = (): void => {
  setTimeout(() => {
    const mensaje = document.getElementById("mensaje-final");
    if (mensaje instanceof HTMLElement) {
      mensaje.classList.add("visible");
    }
  }, 300);
};
