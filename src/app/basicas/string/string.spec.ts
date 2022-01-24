import { mensaje } from './string';

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

    // Declarar otra prueba
    it('Debe retornar un saludo con el nombre enviado como parámetro', () => {
        
        const nombre = 'Alejandro';
        const resultado = mensaje(nombre);

        // Se espera obtener algo que contenga Saludos Alejandro
        // Debería contener y no ser exacto, ya que la salida se puede decorar con otros elementos en un futuro (Saludos estimado Alejandro!!!)
        expect(resultado).toContain(`Saludos ${nombre}`);

    })

});