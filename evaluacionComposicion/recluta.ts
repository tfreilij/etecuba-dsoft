export class Recluta {
  tonalidadDePelo: number;
  nombre: String;
  habilidadArcoYFlecha: number;
  constructor(
    tonalidadDePelo: number,
    habilidadArcoYFlecha: number,
    nombre: String
  ) {
    this.tonalidadDePelo = tonalidadDePelo;
    this.nombre = nombre;
    this.habilidadArcoYFlecha = habilidadArcoYFlecha;
  }

  esPosibleOlly() {
    return this.esRubio() && this.esBuenArquero();
  }

  esRubio() {
    return this.tonalidadDePelo > 50 && this.tonalidadDePelo < 100;
  }

  esBuenArquero() {
    return this.habilidadArcoYFlecha > 6;
  }
}
