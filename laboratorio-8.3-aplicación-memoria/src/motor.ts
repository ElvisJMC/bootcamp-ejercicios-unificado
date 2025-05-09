import {
  Carta,
  Tablero,
  crearColeccionDeCartasInicial,
  infoCartas,
} from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cartas[i];
    cartas[i] = cartas[j];
    cartas[j] = temp;
  }
  return cartas;
};

/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  return (
    !tablero.cartas[indice].estaVuelta &&
    !tablero.cartas[indice].encontrada &&
    tablero.estadoPartida !== "DosCartasLevantadas" //* Evita que se puedan levantar mas de 2 cartas consecutivas.
  );
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.estadoPartida = "UnaCartaLevantada";
    tablero.indiceCartaVolteadaA = indice;
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.estadoPartida = "DosCartasLevantadas";
    tablero.indiceCartaVolteadaB = indice;
  }
};

/*
  Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

/*
  Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = true;
  tablero.cartas[indiceB].estaVuelta = true;
  reiniciarCartasVolteadas(tablero);
};

/*
  Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.cartas[indiceA].estaVuelta = false;
  reiniciarCartasVolteadas(tablero);
};

const reiniciarCartasVolteadas = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

/*
  Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

/*
Iniciar partida
*/
export const iniciaPartida = (tablero: Tablero): void => {
  const nuevasCartas = crearColeccionDeCartasInicial(infoCartas);
  const cartasBarajadas = barajarCartas(nuevasCartas);
  tablero.cartas = cartasBarajadas;
  reiniciarCartasVolteadas(tablero);
};
