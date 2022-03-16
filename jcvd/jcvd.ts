
module.exports = class JCVD {

  fuerza: number
  nombre: String
  constructor(fuerza: number, nombre :String) {
    this.fuerza = fuerza;
    this.nombre = nombre;
  }
  
  entrenar() {
    this.fuerza = this.fuerza + 50
  }
}
