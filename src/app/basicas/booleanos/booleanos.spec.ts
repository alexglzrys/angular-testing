import { impuestosAplicados } from './booleanos';
describe('Pruebas aplicadas al archivo booleanos', () => {

    it('Debe retornan TRUE', () => {
        const respuesta = impuestosAplicados();

        // Podemos negar anteponiendo los métodos not()
        // .not().toBeTruthy();
        // .not().toBeFalsy();

        expect(respuesta).toBeTruthy();
    });

})