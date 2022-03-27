import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, EMPTY, Subject} from 'rxjs';

import { ShowMedicoComponent } from './show-medico.component';
import { ActivatedRoute, Router } from '@angular/router';

// Generar servicios falsos de angular - Ya que solo nos interesa probar la funcionalidad de la aplicación, mas no todos los servicios propios de Angular (estos sabemos que si funcionan)
class FakeRouter {
  navigate(params: string) { }
}

class FakeActivatedRoute {
  //params: Observable<any> = EMPTY

  // el objeto params es un observable en el servicio original
  private subject = new Subject();

  // Simular que el usuario navega a otra ruta, y esta se empuja en el router
  push(value: any) {
    this.subject.next(value);
  }

  // cuando se invoque a params se entregará un observable
  get params() {
    return this.subject.asObservable();
  }
}

describe('ShowMedicoComponent', () => {
  let component: ShowMedicoComponent;
  let fixture: ComponentFixture<ShowMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMedicoComponent ],
      providers: [
        // Registrar servicios fake de angular
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a MedicoComponent cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.saveMedico();
    expect(spy).toHaveBeenCalledWith(['medicos', '123']);
  });

  it('Debe colocar el id = 123658', () => {
    const activatedRouter: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRouter.push({id: '123658'});
    expect(component.medicoId).toBe('123658');
  });

});
