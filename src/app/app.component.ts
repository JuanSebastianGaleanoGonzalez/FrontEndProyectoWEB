import { Component, OnInit } from '@angular/core';
import { PanterasService } from './services/panteras/panteras.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndPanteras';
  panteras: any;

  constructor (public panterasService: PanterasService){}
  ngOnInit(): void {
    this.panterasService.getAllPanteras().subscribe(resp => {
      this.panteras = resp;
    },
    error => {console.error(error)
    });
    }
  }

