import {JCVD} from './jcvd';

test('construye correctamente el objeto', () => {
    let unJC = new JCVD(1000,"juan claudio")  
    expect(unJC.fuerza).toBe(1000);
});


test('la fuerza sube correctamente cuando entrena', () => {
    let unJC = new JCVD(1000,"juan claudio") 
    unJC.entrenar() 
    expect(unJC.fuerza).toBe(1050);
});