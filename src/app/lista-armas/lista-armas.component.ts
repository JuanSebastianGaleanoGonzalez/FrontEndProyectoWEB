import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ArmasServiciosService } from '../services/armas/armas-servicios.service'

@Component({
  selector: 'app-lista-armas',
  templateUrl: './lista-armas.component.html',
  styleUrls: ['./lista-armas.component.css']
})
export class ListaArmasComponent implements OnInit {
  armas: any;
  armasFrom: FormGroup;

  constructor(public armasServiciosService: ArmasServiciosService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.armasServiciosService.getAllArmas().subscribe(resp =>{
      this.armas = resp;
    },
    error =>{
      console.error(error);
    });
    this.armasFrom = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      calibre: ['', Validators.required],
      id_pantera: ['', Validators.required]
    })
  }

}
