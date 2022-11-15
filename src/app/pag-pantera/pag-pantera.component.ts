import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagPanteraService } from '../services/usuarioPantera/pag-pantera.service';


@Component({
  selector: 'app-pag-pantera',
  templateUrl: './pag-pantera.component.html',
  styleUrls: ['./pag-pantera.component.css']
})
export class PagPanteraComponent implements OnInit {
  usuario: any;
  usuForm: FormGroup;
  
  constructor(public pagPanteraService: PagPanteraService , public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  consultarPantera(): void{
    this.pagPanteraService.consulta(this.usuForm.value).subscribe(resp =>{
      this.usuario.push(this.usuForm.value);
      this.usuario.reset();
    },
    error => console.error(error));
  }
}


