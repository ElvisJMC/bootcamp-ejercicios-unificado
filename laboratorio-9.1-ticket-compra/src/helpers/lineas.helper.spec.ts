import { TipoIva } from "../models";
import { calcularLineasDelTicket } from "./lineas.helper";

describe("calcularLineasDelTicket ", () => {
  it("debería lanzar un error si las lineas son undefined", () => {
    // Arrange
    const lineas: any = undefined;

    //Act + Assert
    expect(() => calcularLineasDelTicket(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("debería lanzar un error si las lineas son null", () => {
    // Arrange
    const lineas: any = null;

    //Act + Assert
    expect(() => calcularLineasDelTicket(lineas)).toThrow(
      "Las líneas de ticket no son válidas"
    );
  });

  it("deberría devolver correctamente una linea con IVA general", () => {
    //Arrange
    const lineas = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general" as TipoIva,
        },
        cantidad: 2,
      },
    ];

    //Act
    const resultado = calcularLineasDelTicket(lineas);

    //Assert
    const esperado = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
    ];

    expect(resultado).toEqual(esperado);
  });

  it("deberría devolver correctamente una linea con IVA general", () => {
    //Arrange
    const lineas = [
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general" as TipoIva,
        },
        cantidad: 3,
      },
    ];

    //Act
    const resultado = calcularLineasDelTicket(lineas);

    //Assert
    const esperado = [
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
    ];

    expect(resultado).toEqual(esperado);
  });

  it("deberría devolver correctamente una linea con IVA superreducidoC", () => {
    //Arrange
    const lineas = [
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC" as TipoIva,
        },
        cantidad: 6,
      },
    ];

    //Act
    const resultado = calcularLineasDelTicket(lineas);

    //Assert
    const esperado = [
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC",
        precioConIva: 6,
      },
    ];

    expect(resultado).toEqual(esperado);
  });

  it("deberría devolver correctamente una linea con IVA superreducidoA", () => {
    //Arrange
    const lineas = [
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA" as TipoIva,
        },
        cantidad: 1,
      },
    ];

    //Act
    const resultado = calcularLineasDelTicket(lineas);

    //Assert
    const esperado = [
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];

    expect(resultado).toEqual(esperado);
  });
});
