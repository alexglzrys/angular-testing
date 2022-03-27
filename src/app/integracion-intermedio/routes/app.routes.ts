import { Routes } from "@angular/router";
import { HospitalComponent } from '../../integracion-basicos/hospital/hospital.component';
import { MedicoComponent } from '../../integracion-basicos/medico/medico.component';
import { IncrementadorComponent } from '../../integracion-basicos/incrementador/incrementador.component';

export const routes: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medicos/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent }
];
