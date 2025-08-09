import { extraerSrcDeImgs } from "./motor";

export const extraerImagenes = (): void => {
  const textarea = document.getElementById("html-input");
  const resultado = document.getElementById("resultado");

  if (!(textarea instanceof HTMLTextAreaElement)) return;
  if (!(resultado instanceof HTMLElement)) return;

  const html = textarea.value;
  const urls = extraerSrcDeImgs(html);

  pintarResultado(resultado, urls);
};

const pintarResultado = (resultado: HTMLElement, urls: string[]): void => {
  resultado.innerHTML = "";

  if (urls.length === 0) {
    resultado.textContent = "No se han encontrado imágenes";
    return;
  }

  resultado.innerHTML = `
  <ul class="lista-imagenes">
  ${urls
    .map(
      (u) =>
        `<li><a href="${u}" target="_blank" rel="noopener noreferrer">${u}</a></li>`
    )
    .join("")}
  </ul>`;
};
