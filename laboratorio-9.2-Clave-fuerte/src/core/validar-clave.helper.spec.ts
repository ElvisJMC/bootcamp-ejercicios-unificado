import { validarClave } from "./validar-clave";

describe("validarClave", () => {
  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  it("Debería devolver un error si la clave no tiene mayúsculas y minúsculas", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "clavesegura";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver un error si la clave no tiene numeros", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "claveSegura";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener números",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver un error si la clave no tiene caracteres especiales", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "claveSegura123";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver un error  si la clave no tiene una longitud mínima de 8 caracteres", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "Cl@ve12";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver un error  si la clave tiene el nombre del usuario", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "Elvis@123";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver un error si la clave tiene palabras comunes", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "Password@123";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };

    expect(resultado).toEqual(esperado);
  });

  it("Debería devolver true si la clave cumple con todas las condiciones", () => {
    //Arrange
    const nombreUsuario = "Elvis";
    const clave = "Cl@veSegura1234#";

    //Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    //Assert
    const esperado = {
      esValida: true,
    };

    expect(resultado).toEqual(esperado);
  });
});
