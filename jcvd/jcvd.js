module.exports = /** @class */ (function () {
    function JCVD(fuerza, nombre) {
        this.fuerza = fuerza;
        this.nombre = nombre;
    }
    JCVD.prototype.entrenar = function () {
        this.fuerza = this.fuerza + 50;
    };
    return JCVD;
}());
