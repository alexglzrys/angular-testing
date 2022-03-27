import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-medico',
  templateUrl: './show-medico.component.html',
  styleUrls: ['./show-medico.component.css']
})
export class ShowMedicoComponent implements OnInit {

  medicoId!: string;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.medicoId = params['id'];
    })
  }

  saveMedico() {
    this.router.navigate(['medicos', '123']);
  }

}
