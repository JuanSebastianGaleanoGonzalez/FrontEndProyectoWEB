import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArmasService } from 'src/app/services/armas/armas.service';

@Component({
  selector: 'app-listado-armas',
  templateUrl: './listado-armas.component.html',
  styleUrls: ['./listado-armas.component.css']
})
export class ListadoArmasComponent implements OnInit {
  title = 'Listado de Armas.';
  armas: any;

  constructor(public armasService: ArmasService, private rutaActual: ActivatedRoute) { }

  ngOnInit(): void {
    this.armasService.getArmasPantera(this.rutaActual.snapshot.params['id']).subscribe(resp => {
      this.armas = resp;
    },
      error => {
        console.error(error);
      });
  }
}
