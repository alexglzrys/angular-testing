import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incrementador Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
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

    it('Debe mostrar en el input el valor del progreso', () => {
      // Cambiar el valor actual en la propiedad de progreso
      component.cambiarValor(5);
      // Activar la detección de cambios
      fixture.detectChanges();

      // ! La detección de cambios puede demorar un poco, es por ello que se debe continuar cuando el fixture sea estable
      fixture.whenStable().then(() => {
        const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        // Si por defecto tenía 50, entonces ahora debe ser 55
        expect(el.value).toBe('55');
      });

    });

    it('Debe incrementar/decrementar el valor en 5, si se hace click en los botones', () => {
      // Referencia a los botones
      const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

      // Del arreglo anterior, el primer elemento hace referencia al boton de decrementar (por la posición que ocupa en el template)

      // Disparar el evento click para decrementar el progreso
      buttons[0].triggerEventHandler('click', null);
      // ! No se requiere disparar el detector de eventos de Angular, ya que esta prueba está orientada a verificar el valor de una propiedad y no lo que contiene un elemento en la vista
      expect(component.progreso).toBe(45);

      // Disparar el evento click para incrementar el progreso
      buttons[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50);
    });

    it('El titulo del componente debe mostrar el valor actual del progreso si se hace click en los botones', () => {
      // Referencia a los botones
      const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
      // Referencia al elemento de titulo
      const el: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      // Disparar el evento click para decrementar el progreso
      buttons[0].triggerEventHandler('click', null);

      // ? Disparar el detector de cambios para verificar que el HTML esta mostrando correctamente el valor actual
      fixture.detectChanges();

      expect(el.innerHTML).toContain('45');

      // Disparar el evento click para incrementar el progreso
      buttons[1].triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(el.innerHTML).toContain('50');
    });

});
