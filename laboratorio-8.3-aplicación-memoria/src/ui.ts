import { Tablero } from "./modelo";
import {
  sonPareja,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  parejaNoEncontrada,
  parejaEncontrada,
  esPartidaCompleta,
} from "./motor";

export const renderTablero = (tablero: Tablero) => {
  const contenedor = document.querySelector(".contenedor");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  tablero.cartas.forEach((carta, indice) => {
    const cartaDiv = document.createElement("div");
    cartaDiv.classList.add("carta");

    if (carta.estaVuelta) {
      cartaDiv.classList.add("vuelta");
    }

    cartaDiv.dataset.indice = indice.toString();

    const img = document.createElement("img");
    img.src = carta.imagen;
    img.classList.add("imagen-carta");
    img.style.display = carta.estaVuelta ? "block" : "none";

    cartaDiv.appendChild(img);

    cartaDiv.addEventListener("click", () => {
      if (!sePuedeVoltearLaCarta(tablero, indice)) return;

      // Voltea la carta
      voltearLaCarta(tablero, indice);

      // Muestra la carta volteada inmediatamente
      renderTablero(tablero);

      // Si hay dos cartas levantadas, espera un momento y compara
      if (tablero.estadoPartida === "DosCartasLevantadas") {
        setTimeout(() => {
          const a = tablero.indiceCartaVolteadaA!;
          const b = tablero.indiceCartaVolteadaB!;

          if (sonPareja(a, b, tablero)) {
            parejaEncontrada(tablero, a, b);
            renderTablero(tablero);

            if (esPartidaCompleta(tablero)) {
              setTimeout(() => {
                const mensaje = document.getElementById("mensaje-final");
                if (mensaje) {
                  mensaje.classList.add("visible");
                }
              }, 300);
            }
          } else {
            parejaNoEncontrada(tablero, a, b); // Ya incluye renderTablero
          }
        }, 1000); // Espera 1s para que se puedan ver las dos cartas
      }
    });

    contenedor.appendChild(cartaDiv);
  });
};
