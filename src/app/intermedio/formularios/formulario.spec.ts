import { FormBuilder } from "@angular/forms";
import { Formulario } from "./formulario";

describe('Pruebas de Formulario de registro reactivo', () => {

  let componente: Formulario;
  // Antes de correr cada prueba preparo una instancia limpia de la clase de mi componente que contiene mi formulario reactivo
  beforeEach(() => {
    // El constructor de esta clase espera una instancia del formBuilder (inyecto la dependencia a manita)
    componente = new Formulario(new FormBuilder());
  });

  it('Debe contener campos para email y password', () => {
    // Referencia hacia el formulario reactivo declarado en la clase
    let myReactiveForm = componente.miFormulario;

    expect(myReactiveForm.contains('email')).toBeTruthy();
    expect(myReactiveForm.contains('password')).toBeTruthy();
  });

  it('El email debe ser un campo requerido', () => {
    let myReactiveForm = componente.miFormulario;
    // Referencia hacia el control de formulario a evaluar
    let input = myReactiveForm.get('email');
    // Le establecemos algo vacio
    input?.setValue('');
    // Esperamos que la validéz del campo sea falsa, pues es requerido
    expect(input?.valid).toBeFalsy();
  });

  it('El email debe ser un correo válido', () => {
    let myReactiveForm = componente.miFormulario;
    let input = myReactiveForm.get('email');
    // Establecer un correo no válido
    input?.setValue('alejandro@correo.');
    // Esperamos que la validéz del campo sea falsa, pues se colocó un correo que parece ser no válido
    expect(input?.valid).toBeFalsy();
  });

});
