import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un link a la página /medicos', () => {
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
