import { Jugador } from "./clase";

describe('Pruebas de clase', () => {

  // Se recomienda generar la instancia de clase antes de realizar las pruebas,
  // ya que 100 pruebas requieren 100 instancias de la misma clase en cada prueba-
  let jugador = new Jugador();

  // Ciclo de vida de las pruebas

  // beforeAll();     Antes de comenzar todas las pruebas
  // beforeEach();    Antes de comenzar cada prueba
  // afterEach();     Despues de terminar cada prueba
  // afterAll();      Despues de terminar todas las pruebas

  beforeEach(() => {
    // Antes de comenzar cada prueba, necesito generar una instancia nueva de mi jugador
    // Esto reestablece valores para poder seguir probando este objeto
    jugador = new Jugador();
  });

  it('Debe retornar 80 de HP si recibe golpe con poder de 20', () => {
    const respuesta = jugador.recibeGolpe(20);
    expect(respuesta).toBe(80);
  });

  it('Debe retornar 50 de HP, si recibe nuevamente un golpe con poder de 50', () => {
    const respuesta = jugador.recibeGolpe(50);
    expect(respuesta).toBe(50);
  });

  it('Debe retornar 0 de HP si recibe golpe con poder de 100 o más de daño', () => {
    const respuesta = jugador.recibeGolpe(250);
    expect(respuesta).toBe(0);
  })

});
