
module.exports = class Batman {

  facturas: number
  nombre: String
  constructor(facturas: number, nombre :String) {
    this.facturas = facturas;
    this.nombre = nombre;
  }
  
  irAPanaderia() {
    this.facturas = this.facturas + 50
  }

  
}
