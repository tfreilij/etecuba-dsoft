const Batman = require('./batman');

/*
La convención de Batmans del mercosur tiene pensado hacer una gran reunión. Pero el problema es que últimamente existen tensiones en torno a los posibles infiltrados enviados por Superman.
Como también se piensa comprar comida para la reunión, pero hay que cuidar la salud de los concurrentes, se necesita tener ciertos registros de cuántas facturas planean comer.
Se pide resolver las siguientes funcionalidades:

necesitaTraductor: Determina si un batman NO habla portugués.
tieneNombreLargo: Me dice si un batman tiene un nombre más largo que 10 caracteres.
vaALaPanaderia: Hace que las facturas que tiene en sangre aumenten en 6 unidades.
altoColesterol: Me dice si un batman tiene más de 1000 facturas en sangre.


Ayudas:

1) recordar que podemos usar unString.length para tener su longitud

*/




// Testeamos el contstructor
test('el batman se construye correctamente', () => {
    let unBatman = new Batman(1000,"bruno dias", true)  
    expect(unBatman.facturasEnSangre).toBe(1000);
    expect(unBatman.nombre).toBe("bruno dias");
    expect(unBatman.hablaPortugues).toBe(false);
});



// Testeamos el método necesitaTraductor()
test('testing de necesitaTraductor', () => {
    let unBatman = new Batman(1000,"bruno dias", true)  
    expect(unBatman.necesitaTraductor()).toBe(false);
 
    let otroBatman = new Batman(1000,"bruno dias", true)  
    expect(otroBatman.necesitaTraductor()).toBe(false);
});


// Testeamos el método tieneNombreLargo()
test('testing de tieneNombreLargo', () => {
    let unBatman = new Batman(1000,"bruno diasssss", true)  
    expect(unBatman.tieneNombreLargo()).toBe(true);
 
    let otroBatman = new Batman(1000,"bruno", true)  
    expect(otroBatman.tieneNombreLargo()).toBe(false);

    let robin = new Batman(1000,"brunoooooo", true)  
    expect(robin.tieneNombreLargo()).toBe(false);

});

// Testeamos el método vaALaPanaderia()
test('testing de tieneNombreLargo', () => {
    let unBatman = new Batman(1000,"bruno diasssss", true)  
    unBatman.vaALaPanaderia()
    expect(unBatman.facturas).toBe(1006);
 
    let otroBatman = new Batman(0,"bruno", true)  
    otroBatman.vaALaPanaderia()
    otroBatman.vaALaPanaderia()
    expect(otroBatman.facturas).toBe(12);
});

// Testeamos el método altoColesterol()
test('testing de tieneNombreLargo', () => {
    let unBatman = new Batman(1000,"bruno diasssss", true)  
    expect(unBatman.altoColesterol()).toBe(true);
 
    let otroBatman = new Batman(0,"bruno", true)  
    expect(otroBatman.altoColesterol()).toBe(false);

    let batmanAlLimite = new Batman(999,"bruno", true)  
    expect(batmanAlLimite.altoColesterol()).toBe(false);

    let batmanPasado = new Batman(2000,"bruno", true)  
    expect(batmanPasado.altoColesterol()).toBe(true);
});