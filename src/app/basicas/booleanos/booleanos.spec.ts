import { impuestosAplicados } from './booleanos';

// Saltar todas las pruebas
xdescribe('Pruebas aplicadas al archivo booleanos', () => {

    it('Debe retornan TRUE', () => {
        const respuesta = impuestosAplicados();

        // Podemos negar anteponiendo los métodos not()
        // .not().toBeTruthy();
        // .not().toBeFalsy();

        expect(respuesta).toBeTruthy();
    });

})
