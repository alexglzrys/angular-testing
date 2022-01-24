import { incrementar } from './numeros';
describe('Probar función incrementar', () => {

    it('Debe retornan 100, si el número ingresado es mayor a 100', () => {
        const resultado = incrementar(101);
        expect(resultado).toBe(100);
    })

    it('Debe retornar el número + 1, si el númeor ingresado es menor que 100', () => {
        const resultado = incrementar(52);
        expect(resultado).toBe(53);
    })

});