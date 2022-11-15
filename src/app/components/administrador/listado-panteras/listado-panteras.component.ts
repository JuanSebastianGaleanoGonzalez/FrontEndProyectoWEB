import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanterasService } from 'src/app/services/panteras/panteras.service';

@Component({
  selector: 'app-listado-panteras',
  templateUrl: './listado-panteras.component.html',
  styleUrls: ['./listado-panteras.component.css']
})

export class ListadoPanterasComponent implements OnInit {
  title = 'Listado de Panteras';
  panteras: any;
  panteraForm: FormGroup;
  pantera: any;


  constructor(public panterasService: PanterasService, public fb: FormBuilder) { }
  ngOnInit(): void {
    this.listarPanteras();
    this.panteraForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      tribe: ['', Validators.required]
    })
  }

  listarPanteras(): void{
    this.panterasService.getAllPanteras().subscribe(resp => {
      this.panteras = resp;
    },
      error => {
        console.error(error);
      });
  }

  guardarPantera(): void {
    this.pantera = this.panteraForm.value;
    this.panterasService.putPantera(this.pantera).subscribe(resp => {
      this.panteraForm.reset();
    },
      error => console.error(error));
      this.panteras.push(this.pantera);
  }

  eliminarPantera(pantera: any): void {
    this.panterasService.deletePantera(pantera).subscribe(resp => {
      this.panteras.pop(this.panteras.indexOf(pantera));
    },
      error => console.error(error));
  }

  actualizarPantera(pantera: any): void {
    this.panteraForm.setValue({
      id: pantera.id,
      nombre: pantera.nombre
    })
    this.eliminarPantera(pantera);
  }

}
