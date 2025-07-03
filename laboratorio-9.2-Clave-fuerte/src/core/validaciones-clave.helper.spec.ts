import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./validaciones-clave";

describe("tieneMayusculasYMinusculas", () => {
  it("Deberia devolver un error si la clave es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacia", () => {
    //Arrange
    const clave: string = "";

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave solo tiene mayúsculas", () => {
    //Arrange
    const clave: string = "SOLOMAYUSCULAS";

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave solo tiene minúsculas", () => {
    //Arrange
    const clave: string = "solominusculas";

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave tiene mayúsculas y minúsculas", () => {
    //Arrange
    const clave: string = "ClaveConMayusculasYMinusculas";

    //Act
    const resultado = tieneMayusculasYMinusculas(clave);

    //Assert
    const esperado = {
      esValida: true,
    };
    expect(resultado).toEqual(esperado);
  });
});

describe("tieneNumeros", () => {
  it("Deberia devolver un error si la clave es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacia", () => {
    //Arrange
    const clave: string = "";

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave no tiene números", () => {
    //Arrange
    const clave: string = "ClaveSinNumeros";

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave solo tiene números", () => {
    //Arrange
    const clave: string = "12345678";

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: true,
    };
    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave tiene al menos un número", () => {
    //Arrange
    const clave: string = "ClaveConLetrasY1234";

    //Act
    const resultado = tieneNumeros(clave);

    //Assert
    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Deberia devolver un error si la clave es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacia", () => {
    //Arrange
    const clave: string = "";

    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena sin caracteres especiales", () => {
    //Arrange
    const clave: string = "sinCaracteresEspeciales";

    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave tiene caracteres especiales", () => {
    //Arrange
    const clave: string = "conC@racteresEspeciales#";

    //Act
    const resultado = tieneCaracteresEspeciales(clave);

    //Assert
    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("Deberia devolver un error si la clave es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert

    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacia", () => {
    //Arrange
    const clave: string = "";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert

    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave no tiene una longitud mínima  de 8 caracteres", () => {
    //Arrange
    const clave: string = "Clave12";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert

    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave tiene exactamente 8 caracteres", () => {
    //Arrange
    const clave: string = "Clave123";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert

    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave tiene mas de 8 caracteres", () => {
    //Arrange
    const clave: string = "Clave12345";

    //Act
    const resultado = tieneLongitudMinima(clave);

    //Assert

    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});

describe("tieneNombreUsuario", () => {
  it("Deberia devolver un error si el nombre de usuario es undefined", () => {
    //Arrange
    const nombreUsuario: any = undefined;
    const clave: string = "clave12345";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es undefined", () => {
    //Arrange
    const nombreUsuario: string = "Elvis";
    const clave: any = undefined;

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si el nombre de usuario es null", () => {
    //Arrange
    const nombreUsuario: any = null;
    const clave: string = "clave12345";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Arrange
    const nombreUsuario: string = "Elvis";
    const clave: any = null;

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si el nombre de usuario es una cadena vacia", () => {
    //Arrange
    const nombreUsuario: string = "";
    const clave: string = "clave12345";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacia", () => {
    //Arrange
    const nombreUsuario: string = "Elvis";
    const clave: string = "";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave contiene el nombre de usuario", () => {
    //Arrange
    const nombreUsuario: string = "elvis";
    const clave: string = "elvis12345";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave contiene el nombre de usuario en mayusculas", () => {
    //Arrange
    const nombreUsuario: string = "Elvis";
    const clave: string = "ELVIS1234";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave no contiene el nombre de usuario", () => {
    //Arrange
    const nombreUsuario: string = "Elvis";
    const clave: string = "clave12345";

    //Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});

describe("tienePalabrasComunes", () => {
  const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
  ];

  it("Deberia devolver un error si la clave es undefined", () => {
    //Act
    const clave: any = undefined;

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es null", () => {
    //Act
    const clave: any = null;

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave es una cadena vacía", () => {
    //Act
    const clave: string = "";

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave tiene una palabra común", () => {
    //Act
    const clave: string = "password";

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave tiene una palabra común con números", () => {
    //Act
    const clave: string = "password12345";

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver un error si la clave tiene una palabra común con mayúsculas", () => {
    //Act
    const clave: string = "PAssword12345";

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Deberia devolver true si la clave no tiene una palabra común", () => {
    //Act
    const clave: string = "Clave12345@";

    //Arrange
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});
