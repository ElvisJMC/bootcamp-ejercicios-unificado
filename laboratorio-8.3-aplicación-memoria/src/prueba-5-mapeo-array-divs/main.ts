interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const cartasArray: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
];

const cartasEl = document.querySelectorAll(".carta");

cartasEl.forEach((cartaEl) => {
  cartaEl.addEventListener("click", () => {
    const indice = Number(cartaEl.getAttribute("data-indice"));
    console.log("Carta clicada con índice:", indice);
    const carta = cartasArray[indice];
    if (!cartaEl.querySelector("img")) {
      const img = document.createElement("img");
      img.src = carta.imagen;
      cartaEl.appendChild(img);
    }
  });
});
