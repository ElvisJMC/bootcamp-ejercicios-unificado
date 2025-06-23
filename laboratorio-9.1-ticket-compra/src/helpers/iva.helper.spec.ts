import { obtenerPorcentajeIva } from "./iva.helper";
import { TipoIva } from "../models";

describe("obtenerPorcentaIva", () => {
  it("debería lanzar un error si el tipo es undefined", () => {
    // Arrange
    const tipo: any = undefined;

    //Act + Assert
    expect(() => obtenerPorcentajeIva(tipo)).toThrow("Tipo de IVA no válido");
  });

  it("debería lanzar un error si el tipo es null", () => {
    // Arrange
    const tipo: any = null;

    //Act + Assert
    expect(() => obtenerPorcentajeIva(tipo)).toThrow("Tipo de IVA no válido");
  });

  it.each([
    ["general" as TipoIva, 0.21],
    ["reducido" as TipoIva, 0.1],
    ["superreducidoA" as TipoIva, 0.05],
    ["superreducidoB" as TipoIva, 0.04],
    ["superreducidoC" as TipoIva, 0],
    ["sinIva" as TipoIva, 0],
  ])(
    "si el tipo es %s debería devolver %s",
    (tipo: TipoIva, esperado: number) => {
      //Act
      const resultado = obtenerPorcentajeIva(tipo);

      //Assert
      expect(resultado).toBe(esperado);
    }
  );
});
