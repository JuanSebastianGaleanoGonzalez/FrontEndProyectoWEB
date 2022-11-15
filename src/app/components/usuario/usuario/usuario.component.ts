import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanterasService } from 'src/app/services/panteras/panteras.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  pantera: any;
  idUsuario: number;
  formUsuario: FormGroup;
  constructor(public panterasService: PanterasService, public fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      id: ['', Validators.required]
    })
  }

  consultarPantera(): void{
    this.pantera = this.formUsuario.value;
    this.panterasService.getPantera(this.pantera.id).subscribe(resp => {
      this.pantera = resp;
      this.idUsuario = this.pantera.id;
      console.log(this.pantera);
    },
      error => {
        console.error(error);
      });
  }

  mostrarInformacionUsuario():void{
      this.router.navigate(['usuario/informacionUsuario/', this.idUsuario]);
  }

  mostrarListadoArmas(): void{
      this.router.navigate(['usuario/listaArmas/', this.idUsuario]);
  }
}
