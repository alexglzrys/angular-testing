import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Formulario {

  miFormulario: FormGroup

  constructor(private fb: FormBuilder) {
    this.miFormulario = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
