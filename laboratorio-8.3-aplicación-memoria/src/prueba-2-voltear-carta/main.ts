// He usado la img de otra carta para hacer la prueba de concepto ya que todavia no tengo la img del dorso.

const imgDorso = document.getElementById("imagen-dorso") as HTMLImageElement;

const urlDorso =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
const urlCara =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";

let estaVolteada = false;

imgDorso?.addEventListener("click", () => {
  if (estaVolteada) {
    imgDorso.src = urlDorso;
  } else {
    imgDorso.src = urlCara;
  }
  estaVolteada = !estaVolteada;
});
