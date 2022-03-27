import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        // Se requiere importar el módulo de Router (para testing)
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        // Ayuda a prevenir que durante las pruebas no se conozca ciertos elementos (componentes añadidos al template)
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-pruebas');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-pruebas app is running!');
  });*/

  it('Debe existir una directiva del tipo router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.query(By.directive(RouterOutlet));
    // Se espera que el elemento no sea nulo
    expect(el).not.toBeNull();
  });

  xit('Debe tener un link a la página /medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let exists = false;
    // Barrer todo el arreglo de elementos que tienen la directiva Routerlink
    for (let el of elements) {
      if (el.attributes['routerLink'] === '/medicos') {
        exists = true;
        break;
      }
    }

    expect(exists).toBeTruthy();
  });
});
