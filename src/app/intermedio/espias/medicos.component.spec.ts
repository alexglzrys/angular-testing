import { EMPTY, empty, from, of, throwError } from 'rxjs';
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
      return EMPTY
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


  it('Si falla el registro de médicos en agregarMedico(), la propiedad mensajeError debe ser igual al error que emite el servicio', () => {
    const error = 'No fue posible registrar el médico';
    // Lanzar un error como valor de retorno en el espia
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => error));

    componente.agregarMedico();
    // Se espera que la propiedad mensajeError sea identica al error lanzado en el servicio
    expect(componente.mensajeError).toBe(error);
  })

  it('borrarMedico(3), debe llamar al servidor para borrar un médico con id 3', () => {
    // Simular la confirmación del usuario (ver lógica componente window.confirm)
    // ! Las pruebas unitarias o de intergración no deben tener interacción con el usuario
    spyOn(window, 'confirm').and.returnValue(true);

    // Simular el servicio que en el backend aun no esta terminado (no me interesa su respuesta por el momento, retorno un Onservable con valor vacío)
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('3');
    // se espera que el espia se halla llamado con el prámetro 3
    expect(espia).toHaveBeenCalledWith('3');
  })


  it('borrarMedico(3), NO debe llamar al servidor para borrar un médico con id 3, si el usuario cancela la confirmación', () => {
    // Simular la cancelación del usuario en una ventana confirm - (ver lógica componente window.confirm)
    // ! Las pruebas unitarias o de intergración no deben tener interacción con el usuario
    spyOn(window, 'confirm').and.returnValue(false);

    // Simular el servicio que en el backend aun no esta terminado (no me interesa su respuesta por el momento, retorno un Onservable con valor vacío)
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

    componente.borrarMedico('3');
    // se espera que el espia jamás se halla llamado, pues el usuario canceló la operación
    expect(espia).not.toHaveBeenCalledWith('3');
  })

});
