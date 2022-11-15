import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mostrarListadoPanteras(): void{
    this.router.navigate(['administrador/listaPanteras']);
  }

  mostrarListadoAdministradores(): void{
    this.router.navigate(['administrador/listaAdministradores']);
  }
}
