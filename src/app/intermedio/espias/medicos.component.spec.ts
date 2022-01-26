import { empty, from, of } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

  // En pruebas unitarias o de integración se recomienda ser lo más generico posible con los elementos que se requieren para poder hacer la evaluación
  let componente: MedicosComponent;
  // No mandamos HttpClien, ya que nuestros servicios aun no estan listos en el backend, y por tanto desconocemos las URL finales
  let servicio = new MedicosService(null as any);

  beforeEach( () => {
    // Crear una instancia de mi componetne de medicos
    componente = new MedicosComponent(servicio);
  });


  it('ngOnInit, debe cargar los médicos', () => {
    const medicos = ['médico 1', 'médico 2', 'médico 3', 'médico 4'];

    // ! Los espias permiten hacer Fake de servicios que aun no estan terminados en el backend
    // Coloca un espia en el (servicio) y cuando invoquen el método (getMedicos), llama al siguiente procedimiento falso
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      // Devuelve un arreglo de médicos como una promesa
      return from([medicos]);
    })

    // Es necesario llamar explicitamente al método ngOnInit, (Las pruebas desconocen que existe un ciclo de vida en Angular)
    componente.ngOnInit();
    // Se espera que haya uno o más médicos
    expect(componente.medicos.length).toBeGreaterThan(0);
  });


  it('agregarMedico(), debe llamar a un servicio en el backend para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(respuesta => {
      // Solo regreso un Observable vacío
      return empty()
    });

    componente.agregarMedico();
    // se espera que el espia se halla llamado
    expect(espia).toHaveBeenCalled();
  });


  it('agregarMedico(), debe agregar un nuevo médico al arreglo de médicos', () => {
    // Médico que debe agregarse tras llamar el servicio, en el arreglo de médicos (ver función en el componente)
    const medico = { nombre: 'Médico Juan Carlos' };
    // Coloca un espia en el servicio, cuando se llame al método agregarMedico, rebes retornar un valor falso (Observable con el médico registrado)
    spyOn(servicio, 'agregarMedico').and.returnValue(of(medico))

    componente.agregarMedico();
    // se espera que la longitud del arreglo de médicos sea 1, pues en el componente esta vacia (ver función en el componente)
    expect(componente.medicos.length).toBe(1);
    // Se espera que en ese arreglo de médicos, se encuentre el médico registrado por el servicio (ver función en el componente)
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

  });


});
