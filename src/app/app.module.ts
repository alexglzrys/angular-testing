import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './integracion-basicos/medico/medico.component';
import { HttpClientModule } from '@angular/common/http';
import { HospitalComponent } from './integracion-basicos/hospital/hospital.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './integracion-basicos/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { routes } from './integracion-intermedio/routes/app.routes';
import { NavbarComponent } from './integracion-intermedio/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
