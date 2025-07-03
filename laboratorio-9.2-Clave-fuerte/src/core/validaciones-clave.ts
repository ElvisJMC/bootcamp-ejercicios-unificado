import { ValidacionClave } from "../modelo";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  const tieneMayusculas = /[A-Z]/.test(clave);
  const tieneMinusculas = /[a-z]/.test(clave);

  if (!tieneMayusculas || !tieneMinusculas) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  }

  const tieneNumeros = /\d/.test(clave);

  if (!tieneNumeros) {
    return {
      esValida: false,
      error: "La clave debe de tener números",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }

  const tieneCaracteresEspeciales = /[^a-zA-Z0-9]/.test(clave);

  if (!tieneCaracteresEspeciales) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }

  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }

  return { esValida: true };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave || !nombreUsuario) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }

  const claveLower = clave.toLowerCase();
  const nombreLower = nombreUsuario.toLowerCase();

  if (claveLower.includes(nombreLower)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }

  return {
    esValida: true,
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }

  const claveLower = clave.toLowerCase();

  const tienePalabraComun = commonPasswords.some((palabra) =>
    claveLower.includes(palabra.toLowerCase())
  );

  if (tienePalabraComun) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }

  return {
    esValida: true,
  };
};
