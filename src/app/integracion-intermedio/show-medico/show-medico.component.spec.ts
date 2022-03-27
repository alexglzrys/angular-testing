import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, EMPTY} from 'rxjs';

import { ShowMedicoComponent } from './show-medico.component';
import { ActivatedRoute, Router } from '@angular/router';

// Generar servicios falsos de angular - Ya que solo nos interesa probar la funcionalidad de la aplicación, mas no todos los servicios propios de Angular (estos sabemos que si funcionan)
class FakeRouter {
  navigate(params: string) { }
}

class FakeActivatedRoute {
  // El objeto params en el servicio original es un observable
  params: Observable<any> = EMPTY
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
});
