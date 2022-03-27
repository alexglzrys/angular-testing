import { routes } from "./app.routes";
import { MedicoComponent } from '../../integracion-basicos/medico/medico.component';

describe('Rutas principales', () => {
  it('Debe existir la ruta medicos/:id', () => {
    // Simplemente verificamos la existencia de todo el objeto en el arreglo de rutas
    expect(routes).toContain({path: 'medicos/:id', component: MedicoComponent});
  });
});
