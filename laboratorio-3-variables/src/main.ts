import "./style.css";

const estiloNombre = "font-weight: bold; background-color: green; font-size: 14px";

interface Grupo {
  nombre: string;
  fundacion: number;
  activo: boolean;
  genero: string;
}

const grupoA: Grupo = { 
  nombre: "The Beatles",
  fundacion: 1960,
  activo: true,
  genero: "🎵 Pop Rock",
}

const grupoB: Grupo = { 
  nombre: "Queen",
  fundacion: 1970,
  activo: false,
  genero: "🎸 Rock",
}

const grupoC: Grupo = { 
  nombre: "AC DC",
  fundacion: 1973,
  activo: true,
  genero: "🤘 Hard Rock",
}

const grupoD: Grupo = { 
  nombre: "Ludwig van Beethoven",
  fundacion: 1770,
  activo: false,
  genero: "🎼 Clásica",
}

const grupoE: Grupo = { 
  nombre: "The Rolling Stones",
  fundacion: 1962,
  activo: true,
  genero: "🎸 Rock",
}

console.log(`%c${grupoA.nombre}`,estiloNombre, `fundacion: ${grupoA.fundacion} activo: ${grupoA.activo} genero: ${grupoA.genero}`);
console.log(`%c${grupoB.nombre}`,estiloNombre, `fundacion: ${grupoB.fundacion} activo: ${grupoB.activo} genero: ${grupoB.genero}`);
console.log(`%c${grupoC.nombre}`,estiloNombre, `fundacion: ${grupoC.fundacion} activo: ${grupoC.activo} genero: ${grupoC.genero}`);
console.log(`%c${grupoD.nombre}`,estiloNombre, `fundacion: ${grupoD.fundacion} activo: ${grupoD.activo} genero: ${grupoD.genero}`);
console.log(`%c${grupoE.nombre}`,estiloNombre, `fundacion: ${grupoE.fundacion} activo: ${grupoE.activo} genero: ${grupoE.genero}`);