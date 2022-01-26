import { Personaje } from "./personaje";

describe('Pruebas EventEmitter en clase Personaje', () => {

  let personaje: Personaje

  // Generar una nueva instancia de Personaje antes de cada prueba (reset del objeto a su estado original)
  beforeEach(() => personaje = new Personaje() );

  it('Debe emitir un evento personalizado con valor de 0 si el daño recibido es mayor o igual de 100', () => {
    let resultado = 0;
    // Suscribirme al evento personalizado.
    // Esto sería como un listener, esperando que suceda el evento.
    personaje.puntosVidaActualizados.subscribe(puntos => {
      resultado = puntos;
    })

    personaje.recibeGolpe(300);
    expect(resultado).toBe(0);
  });

  it('Debe emitir un evento personalizado con valor de 30, si el daño recibido es de 70', () => {
    let resultado = 0;
    // Suscribirme al evento personalizado
    personaje.puntosVidaActualizados.subscribe(puntos => resultado = puntos);

    personaje.recibeGolpe(70);
    expect(resultado).toBe(30);
  })

});
