import { Recluta } from "./recluta";

export class GuardiaDeLaNoche {
  reclutas: Recluta[];

  constructor() {
    this.reclutas = [];
  }

  cantidadDeOllies() {
    let contador: number = 0;

    this.reclutas.forEach((unRecluta) => {
      if (unRecluta.esPosibleOlly()) {
        contador = contador + 1;
      }
    });

    return contador;
  }
}
