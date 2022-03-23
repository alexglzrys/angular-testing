import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';

describe('Médico Component', () => {

  // Una prueba de integración se parece a una prueba unitaria (describe - it)
  // ! La diferencia radica en que el componente a testear, debe ser previamente compilado por Angular, para tener acceso a todos sus elementos internos (DOM), servicios, pipes, componentes hijos, etc.

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    // Para cada prueba de integración, necesitamos que el componente a testear este debidamente compilado
    // * Es importante especificar los artefactos (modulos, componentes hijos, servicios, pipes) de los cuales depende el componente a testear (idéntico a la definición de un módulo)
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      // providers: [],   servicios
      // imports: []      modulos compartidos
    });

    // Una vez compilado el componente, obtenemos un Fixture, el cuál nos permite tener acceso a los elementos del DOM de dicho componente, así como al ciclo de vida o deteccióon de cambios - (similar a jQuery)
    fixture = TestBed.createComponent(MedicoComponent);
    // La instancia del propio componente (tener acceso a sus propiedades y métodos)
    component = fixture.componentInstance;

  })

});
