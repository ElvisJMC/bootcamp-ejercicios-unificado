import { Personaje } from "./modelo";

const crearElementoImagen = (
  nombreImagen: string,
  alt: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = `http://localhost:3000/${nombreImagen}`;
  imagen.alt = alt;
  imagen.style.maxWidth = "100%";
  return imagen;
};

const crearParrafoEtiquetado = (
  etiqueta: string,
  valor: string
): HTMLParagraphElement => {
  const parrafo = document.createElement("p");

  const span = document.createElement("span");
  span.textContent = `${etiqueta}: `;
  span.style.fontWeight = "bold";

  parrafo.appendChild(span);
  parrafo.appendChild(document.createTextNode(valor));

  return parrafo;
};

const limpiarContenedor = (selector: string): void => {
  const contenedor = document.querySelector(selector);
  if (contenedor && contenedor instanceof HTMLElement) {
    contenedor.innerHTML = "";
  } else {
    throw new Error(`No se ha encontrado el contenedor: ${selector}`);
  }
};

const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");

  const nombre = crearParrafoEtiquetado("Nombre", personaje.nombre);
  elementoPersonaje.appendChild(nombre);

  const apodo = crearParrafoEtiquetado("apodo", personaje.apodo);
  elementoPersonaje.appendChild(apodo);

  const especialidad = crearParrafoEtiquetado(
    "especialidad",
    personaje.especialidad
  );
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearParrafoEtiquetado(
    "Habilidades",
    personaje.habilidades.join(", ")
  );
  elementoPersonaje.appendChild(habilidades);

  const amigo = crearParrafoEtiquetado("amigo", personaje.amigo);
  elementoPersonaje.appendChild(amigo);

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  elementoPersonaje.appendChild(imagen);

  return elementoPersonaje;
};

export const pintarPersonajes = (personajes: Personaje[]): void => {
  const lista = document.querySelector("#personajes-lista");
  limpiarContenedor("#personajes-lista");
  if (lista && lista instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      lista.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor lista");
  }
};
