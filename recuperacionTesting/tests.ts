import { Batman } from "./batman";

/*
    Armar los siguientes Tests (SIN USAR CONSTRUCTORES)

1) Se arma un Batman con 1000 facturas en sangre y que se llama "Braulio"

2) Se arma un Batman con 500 facturas en sangre y que se llama "Javascript"
   Se arma otro Batman con 600 facturas en sangre y que se llama "HTML"     

3) Se arma un Batman con 300 facturas en sangre con un nombre vacío.
    Se arma un Batman con 900 facturas en sangre con un nombre vacío.
    Definir el método altasFacturasEnSangre que da verdadero si tiene más de 
        500 facturas en sangre. 
    Testear el método para ambos Batmans.

Ahora le agregamos un atributo a los Batman que idnica si sabe inglés o no y le sacamos el 
    nombre (ya no va a tener ese atributo).

4) Armar un batman con 600 facturas en sangre, que no sepa inglés

5) Armar un batman con 700 facturas en sangre y que sepa inglés.
    Definir el método necesitaTraductor, que da verdadero si no sabe inglés.

6) Armar un batman que necesite traductor y que tenga bajos niveles de facturas en sangre.

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
