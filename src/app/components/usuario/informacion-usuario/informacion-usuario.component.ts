import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PanterasService } from 'src/app/services/panteras/panteras.service';

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.css']
})

export class InformacionUsuarioComponent implements OnInit {
  title = 'Informacion del Usuario.';
  pantera: any;
  id: number;
  constructor(private rutaActual: ActivatedRoute, public panteraService: PanterasService) {
  }


  ngOnInit(): void {
    this.id = this.rutaActual.snapshot.params['id'];
    this.pantera = this.consultarPantera(this.id);
  }

  consultarPantera(id: any):void{
    this.panteraService.getPantera(this.id).subscribe(resp => {
      this.pantera = resp;
    },
      error => {
        console.error(error);
      });
  }

}
