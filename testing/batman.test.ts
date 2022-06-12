const Batman = require('./batman');

test('construye correctamente el objeto', () => {
    let unBatman = new Batman(1000,"juan claudio")  
    expect(unBatman.facturas).toBe(1000);
});


test('la facturas sube correctamente cuando entrena', () => {
    let unBatman = new Batman(1000,"juan claudio") 
    unBatman.irAPanaderia() 
    expect(unBatman.facturas).toBe(1050);
});

