import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-armas',
  templateUrl: './listado-armas.component.html',
  styleUrls: ['./listado-armas.component.css']
})
export class ListadoArmasComponent implements OnInit {
  title = 'Listado de Armas.';

  constructor() { }

  ngOnInit(): void {
  }

}
