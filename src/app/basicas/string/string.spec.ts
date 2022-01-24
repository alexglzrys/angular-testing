import { mensaje } from "./string";

// ! Correr pruebas: ng test

// Describir puntualmente la pruebas relacionadas que deseo hacer
describe('Pruebas al archivo de string', () => {
    
    // Declarar cada prueba
    it('Retorne una cadena de texto', () => {

        // Importar el elemento al que le debemos hacer pruebas
        const resultado = mensaje('Alejandro');

        // Indicar lo que se espera obtener de esta prueba
        // Se espera que tipo de retorno sea un string
        expect(typeof resultado).toBe('string');
    });

});