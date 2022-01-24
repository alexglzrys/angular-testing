import { obtenerRobots } from "./arreglos"

describe('Probar archivo de arreglos', () => {

  it('Debe retornar al menos 3 robots', () => {
    const resultado = obtenerRobots();
    // Se espera que el resultado sea mayor o igual a 3 elementos
    expect(resultado.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir Androide Cell y Androide # 17', () => {
    const resultado = obtenerRobots();
    // Podemos tener más de una expectativa como resultado de la prueba
    expect(resultado).toContain('Androide Cell');
    expect(resultado).toContain('Androide # 17');
  });

})
