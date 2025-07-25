import { pintarPersonajes } from "./ui";
import { obtenerPersonajes, obtenerPersonaje } from "./api";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const personajes = await obtenerPersonajes();
    pintarPersonajes(personajes);
    iniciarFormularioBusqueda();
  } catch (error) {
    console.error("Error al cargar personajes:", error);
  }
});

const obtenerValorInput = (): string => {
  const input = document.getElementById("nombre-personaje");
  if (input && input instanceof HTMLInputElement) {
    return input.value;
  } else {
    throw new Error("El nombre no se ha encontrado o no es válido");
  }
};

const iniciarFormularioBusqueda = () => {
  const formulario = document.querySelector("#formulario-busqueda");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", filtrarPersonaje);
  } else {
    throw new Error("No se ha encontrado el personaje");
  }
};

const filtrarPersonaje = async (evento: SubmitEvent): Promise<void> => {
  try {
    evento.preventDefault();
    const nombre = obtenerValorInput();
    const personajeFiltrado = await obtenerPersonaje(nombre);
    pintarPersonajes(personajeFiltrado);
  } catch (error) {
    console.error("Error al obtener personaje: ", error);
  }
};
