import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Component Unit', () => {
  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('No debe rebasar el valor de 100 en el progreso', () => {
    component.progreso = 100;
    component.cambiarValor(75);
    expect(component.progreso).toBe(100);
  });
});
