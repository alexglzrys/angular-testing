import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor(private medicosService: MedicosService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre: string) {
    return nombre;
  }

  getMedicos() {
    this.medicosService.getAllMedicos().subscribe(medicos => this.medicos = medicos);
  }

}
