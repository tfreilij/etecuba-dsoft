import { GuardiaDeLaNoche } from "./guardiaDeLaNoche";
import { Recluta } from "./recluta";

// Testeamos el contstructor
test("constructor", () => {
  let unRecluta = new Recluta(99, 5, "Tomas");
  let otroRecluta = new Recluta(140, 5, "Tomas");
  let otroOtroRecluta = new Recluta(80, 8, "Tomas");

  expect(unRecluta.esPosibleOlly()).toBe(false);
  expect(otroRecluta.esPosibleOlly()).toBe(false);
  expect(otroOtroRecluta.esPosibleOlly()).toBe(true);
});
