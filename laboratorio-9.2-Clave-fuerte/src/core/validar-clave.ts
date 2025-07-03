import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validaciones-clave";
import { ValidacionClave } from "../modelo";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validarMayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  if (!validarMayusculasYMinusculas.esValida) {
    return validarMayusculasYMinusculas;
  }

  const validarNumeros = tieneNumeros(clave);
  if (!validarNumeros.esValida) {
    return validarNumeros;
  }

  const validarCaracteresEspeciales = tieneCaracteresEspeciales(clave);
  if (!validarCaracteresEspeciales.esValida) {
    return validarCaracteresEspeciales;
  }

  const validarLongitudMinima = tieneLongitudMinima(clave);
  if (!validarLongitudMinima.esValida) {
    return validarLongitudMinima;
  }

  const validarNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
  if (!validarNombreUsuario.esValida) {
    return validarNombreUsuario;
  }

  const validarPalabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  if (!validarPalabrasComunes.esValida) {
    return validarPalabrasComunes;
  }

  return {
    esValida: true,
  };
};
