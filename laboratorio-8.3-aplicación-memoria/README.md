# Laboratorio-8.3-Aplicación de memoria.

Cómo probar cada prueba de concepto:

Este proyecto utiliza una única plantilla index.html en la raíz del proyecto.
Para ejecutar una prueba específica, simplemente cambia las rutas del script y el CSS dentro del index.html según la prueba en la que se quiera trabajar o visualizar..

GUIA PARA CADA PRUEBA:

- Prueba 1 - Barajar cartas:
  <script type="module" src="/src/prueba-1-barajar-cartas/main.ts"></script>

- Prueba 2 - Voltear carta:
    <script type="module" src="/src/prueba-2-voltear-carta/main.ts"></script>

  \*HMTL Code:
  <div class="contenedor">
    <img
        id="imagen-dorso"
        src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"
        alt="Carta boca abajo"
        />
  </div>

- Prueba 3 - Mostrar grid de cartas:
  <link rel="stylesheet" href="/src/prueba-3-grid-cartas/style.css" />
  <script type="module" src="/src/prueba-3-grid-cartas/main.ts"></script>

\*HMTL Code:
<div class="zona-juego">
<div class="contenedor">
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
<div class="carta"></div>
</div>
</div>

- Prueba 4 - Voltear dos cartas:
    <link rel="stylesheet" href="/src/prueba-4-voltear-dos-cartas/style.css" />
    <script type="module" src="/src/prueba-4-voltear-dos-cartas/main.ts"></script>

  \*HMTL Code:
  <main class="zona-juego">
  <div class="contenedor">
  <div id="imagen1">
  <img
        id="imgLeon"
        src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"
        alt="Imagen de un león"
      />
  </div>
  <div id="imagen2">
  <img
      id="imgBuho"
      src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"
      alt="Imagen de un búho"
    />
  </div>
  </div>
  </main>

- Prueba 5 - Mapear div con array:
    <link rel="stylesheet" href="/src/prueba-5-mapeo-array-divs/style.css" />
    <script type="module" src="/src/prueba-5-mapeo-array-divs/main.ts"></script>

  \*HMTL Code:
  <main class="zona-juego">
    <div class="contenedor">
      <div class="carta" data-indice="0"></div>
      <div class="carta" data-indice="1"></div>
      <div class="carta" data-indice="2"></div>
      <div class="carta" data-indice="3"></div>
      <div class="carta" data-indice="4"></div>
      <div class="carta" data-indice="5"></div>
    </div>
  </main>

- Implementación final:
  <link rel="stylesheet" href="/src/style.css" />
  <script type="module" src="/src/main.ts"></script>

  \*HMTL Code:
  <main class="zona-juego">
    <div class="contenedor"></div>
      <div id="mensaje-final" class="mensaje-oculto">
          🎉 ¡Has completado la partida!
      </div>
  </main>
