# laboratorio-git-remoto

## Descripción de los pasos seguidos para completar el laboratorio.

1. Crea un repositorio local:

- Accedo al disco duro de mi ordenador y dentro de la carpeta que utilizo para practicar (llamada Lemoncode) creo una carpeta llamada laboratorio-git-local.

- Desde VS code abro la carpeta laboratorio-git-local e inicializo el repositorio con git init -b main. Lo he hecho de esta manera para establecer mi rama local como "main" al igual que la rama en remoto y así evitar tener dos ramas diferentes, la de remoto como "main" y la local como "master".

2. Subir el repositorio a GitHub

- Creo un nuevo repositorio público en GitHub llamado laboratorio-git-remoto y le añado un readme.md.

- Conecto el repositorio local con el de GitHub desde la terminal VS code on el comando git remote add origin + URL.

- Para verificar que se ha hecho la conexión correctamente, utilizo el comando git remote -v y obtengo la siguiente información:
origin  git@github.com:ElvisJMC/laboratorio0.git (fetch)
origin  git@github.com:ElvisJMC/laboratorio0.git (push)

3. Hacer un commit y un push:

  - Creo un archivo index.html en la carpeta laboratorio-git-local.

  - Añado el archivo al staging con el comando git add . y a continuación hago el commit con el comando git commit -m "Primer commit".

  - Subo los cambios al repositorio en GitHub con el comando git push -u origin main. No meja hacer el push debido a que inicializé el repositorio en remoto con el archivo readme.md.

  - Intento solucionar el problema sincronizando los repositorios con git pull origin main pero obtengo el error "fatal: refusing to merge unrelated histories".

  - Lo soluciono fusionando los historiales con git pull origin main --allow-unrelated-histories. 

  - Finalmente subo los cambios con git push -u origin main.

4. Crear una rama:

  - Creo una nueva rama llamada "development" con el comando git branch.
  - Cambio a la nueva rama con el comando git checkout + rama.
  - Realizo cambios en el archivo html, cambio el h1 y añado un h2. 
  - Añado el archivo al staging con el comando git add . y a continuación hago el commit con el comando git commit -m "Cambios en rama development".
  - Subo los cambios al repositorio en GitHub con el comando git push -u origin development.

5. Hacer un merge:

  - Vuelvo a la rama "main".
  - Hago un merge de la rama "development" a la rama "main" con el comando git merge. 
  - No hay conflictos, los cambios se han incorporado a la rama "main" correctamente.
  - Subo los cambios a GitHub con git push -u origin.
  - Empiezo a editar el archivo "reamde" y al hacer git push para comprobar que se suben los cambios correctamente, recibo el error: fatal: The current branch main has no upstream branch...
  - Entiendo que debería haber hecho antes un git push --set-upstream origin main para poder asignarlo como repositorio por defecto para subir los cambios.
  - Termino de editar el readme y hago  git push.




