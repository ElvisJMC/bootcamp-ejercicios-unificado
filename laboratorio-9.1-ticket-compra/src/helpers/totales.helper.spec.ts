import { calcularTotales, calcularDesglosePorTipoIva } from "./totales.helper";
import { TipoIva, ResultadoLineaTicket } from "../models";

describe("calcularTotales", () => {
  it("debería lanzar un error si las lineas son undefined", () => {
    // Arrange
    const lineas: any = undefined;

    //Act + Assert
    expect(() => calcularTotales(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("debería lanzar un error si las lineas son null", () => {
    // Arrange
    const lineas: any = null;

    //Act + Assert
    expect(() => calcularTotales(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("debería devolver el total sin IVA, con IVA y el total del IVA", () => {
    //Arrange
    const lineas = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general" as TipoIva,
        precioConIva: 4.84,
      },

      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general" as TipoIva,
        precioConIva: 72.6,
      },

      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC" as TipoIva,
        precioConIva: 6,
      },

      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA" as TipoIva,
        precioConIva: 5.25,
      },
    ];
    //Act
    const resultado = calcularTotales(lineas);

    //Assert
    const esperado = {
      totalSinIva: 75,
      totalConIva: 88.69,
      totalIva: 13.69,
    };

    expect(resultado).toEqual(esperado);
  });
});

describe("calcularDesglosePorTipoIva", () => {
  it("debería lanzar un error si las lineas son undefined", () => {
    // Arrange
    const lineas: any = undefined;

    //Act + Assert
    expect(() => calcularDesglosePorTipoIva(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("debería lanzar un error si las lineas son null", () => {
    // Arrange
    const lineas: any = null;

    //Act + Assert
    expect(() => calcularDesglosePorTipoIva(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("debería devolver un array vacío si no hay líneas", () => {
    // Arrange
    const lineas: ResultadoLineaTicket[] = [];

    // Act
    const resultado = calcularDesglosePorTipoIva(lineas);

    // Assert
    expect(resultado).toEqual([]);
  });

  it("debería devolver la cantidad total de cada tipo de IVA", () => {
    // Arrange
    const lineas = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general" as TipoIva,
        precioConIva: 4.84,
      },

      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general" as TipoIva,
        precioConIva: 72.6,
      },

      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC" as TipoIva,
        precioConIva: 6,
      },

      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA" as TipoIva,
        precioConIva: 5.25,
      },
    ];

    // Act
    const resultado = calcularDesglosePorTipoIva(lineas);

    // Assert
    const esperado = [
      {
        tipoIva: "general",
        cuantia: 13.44,
      },
      {
        tipoIva: "superreducidoC",
        cuantia: 0,
      },
      {
        tipoIva: "superreducidoA",
        cuantia: 0.25,
      },
    ];

    expect(resultado).toEqual(esperado);
  });
});
