const imagen1El = document.getElementById("imagen1") as HTMLImageElement;
const imagen2El = document.getElementById("imagen2") as HTMLImageElement;
const imgLeonEl = document.getElementById("imgLeon") as HTMLImageElement;
const imgBuhoEl = document.getElementById("imgBuho") as HTMLImageElement;

imgLeonEl.style.display = "none";
imgBuhoEl.style.display = "none";

let leonVisible = false;
let buhoVisible = false;

imagen1El?.addEventListener("click", () => {
  if (!leonVisible) {
    imgLeonEl.style.display = "block";
    leonVisible = true;
    temporizadorGirarCartas();
  } else {
    imgLeonEl.style.display = "none";
    leonVisible = false;
  }
});

imagen2El?.addEventListener("click", () => {
  if (!buhoVisible) {
    imgBuhoEl.style.display = "block";
    buhoVisible = true;
    temporizadorGirarCartas();
  } else {
    imgBuhoEl.style.display = "none";
    buhoVisible = false;
  }
});

const temporizadorGirarCartas = () => {
  if (leonVisible === true && buhoVisible === true) {
    setTimeout(girarCartas, 1300);
  }
};

const girarCartas = () => {
  imgLeonEl.style.display = "none";
  imgBuhoEl.style.display = "none";

  leonVisible = false;
  buhoVisible = false;
};
