import { extraerImagenes } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("extraer-imagenes");
  if (boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", extraerImagenes);
  }
});
