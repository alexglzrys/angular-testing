import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicosService } from '../services/medicos.service';

describe('Médico Component', () => {

  // Una prueba de integración se parece a una prueba unitaria (describe - it - expect)
  // ! La diferencia radica en que el componente a testear, debe ser previamente compilado por Angular, para tener acceso a todos sus elementos internos (DOM), servicios, pipes, componentes hijos, etc.

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    // Para cada prueba de integración, necesitamos que el componente a testear este debidamente compilado
    // * Es importante especificar los artefactos (modulos, componentes hijos, servicios, pipes) de los cuales depende el componente a testear (idéntico a la definición de un módulo)
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicosService],      // servicios
      imports: [HttpClientModule]      // modulos compartidos o necesarios
    });

    // Una vez compilado el componente, obtenemos un Fixture, el cuál nos permite tener acceso a los elementos del DOM de dicho componente, así como al ciclo de vida o deteccióon de cambios - (similar a jQuery)
    fixture = TestBed.createComponent(MedicoComponent);
    // La instancia del propio componente (tener acceso a sus propiedades y métodos)
    component = fixture.componentInstance;

  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Alex';
    // Invocar a un método definido en el componente
    const response = component.saludarMedico(nombre);

    expect(response).toContain(nombre);
  });

});
