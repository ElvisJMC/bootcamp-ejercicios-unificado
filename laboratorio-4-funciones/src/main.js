import "./style.css";

const numeroTurno = document.querySelector(".numero-turno");

const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");
const botonReset = document.getElementById("reset");
const botonCambiarTurno = document.getElementById("cambiar-turno");

// Convertir el texto del número a un número entero
let turnoActual = parseInt(numeroTurno.textContent);

// Función para actualizar el número mostrado
function actualizarTurno() {
  numeroTurno.textContent = turnoActual.toString().padStart(2, "0");
}

// Botones:
botonAnterior.addEventListener("click", () => {
  turnoActual = turnoActual - 1;
  actualizarTurno();
});

botonSiguiente.addEventListener("click", () => {
  turnoActual = turnoActual + 1;
  actualizarTurno();
});

botonReset.addEventListener("click", () => {
  turnoActual = 1;
  document.getElementById("editar-turno").value = "01";
  actualizarTurno();
});

botonCambiarTurno.addEventListener("click", () => {
  turnoActual = parseInt(document.getElementById("editar-turno").value)
  actualizarTurno();
});