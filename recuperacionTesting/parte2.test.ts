import { Batman } from "./batman";

/*
   Un Batman tiene 
   1) Cantidad de facturas
   2) Sueldo de sus empleados
   3) un indicador de si mira series turcas

Implementar y testear los siguientes métodos en la clase Batman.

1) altoExplotador() : Dar verdadero si un Batman tiene un sueldo de sus empleados
    menor que 150000.

2) fat() : Da verdadero si el Batman tiene más de 1000 facturas en sangre.

3) fatMagul() : Indica si el batman mira series turcas y está fat.

4) entrenar() : Hace que las facturas en sangre bajen en 100 unidades.

5) irALaPanaderia() : Hace que las facturas en sangre suban en 50 unidades.

*/

test("construye correctamente el objeto", () => {
  let unBatman = new Batman(1000, "juan claudio");
  expect(unBatman.facturas).toBe(1000);
});

test("la facturas sube correctamente cuando entrena", () => {
  let unBatman = new Batman(1000, "juan claudio");
  unBatman.irAPanaderia();
  expect(unBatman.facturas).toBe(1050);
});
