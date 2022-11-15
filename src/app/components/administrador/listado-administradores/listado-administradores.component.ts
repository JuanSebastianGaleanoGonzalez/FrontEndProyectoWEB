import { Component, OnInit } from '@angular/core';
import { AdministradoresService } from 'src/app/services/administradores/administradores.service';
@Component({
  selector: 'app-listado-administradores',
  templateUrl: './listado-administradores.component.html',
  styleUrls: ['./listado-administradores.component.css']
})

export class ListadoAdministradoresComponent implements OnInit {
  title = 'Listado de Administradores.';
  administradores: any;
  constructor(public administradorService: AdministradoresService) { }

  ngOnInit(): void {

    this.administradorService.getAllAdministradores().subscribe(resp => {
      this.administradores = resp;
    },
      error => {
        console.error(error);
      });
  }

}
