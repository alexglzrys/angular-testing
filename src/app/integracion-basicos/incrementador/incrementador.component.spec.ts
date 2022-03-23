import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {
      // Asignar un valor a la propiedad leyenda del componente
      component.leyenda = 'Proceso de carga';

      // ? Es necesario indicar a Angular que dispare el detector de cambios, pues ha cambiado el valor de algunas propiedades y pueda pintarlas nuevamente en la UI
      fixture.detectChanges();

      // Obtener la referencia al elemento HTML que deseamos inspeccionar
      // En este caso podemos buscar por CSS, directiva
      const el: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      expect(el.innerHTML).toContain('Proceso de carga');
    });

});
