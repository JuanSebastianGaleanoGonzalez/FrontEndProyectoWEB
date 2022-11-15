import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanterasService } from './services/panteras/panteras.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FrontEndPanteras';
  
  panteras: any;
  panteraForm: FormGroup;

  constructor(private router: Router,public panterasService: PanterasService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.panterasService.getAllPanteras().subscribe(resp => {
      this.panteras = resp;
    },
    error => {
      console.error(error);
    });
    this.panteraForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      tribe: ['', Validators.required]
    })
  }

  rutaAdministrador(){
    this.router.navigate(["pantera"])
  }
  rutaPantera(){
    this.router.navigate(["paginaPantera"])
  }
  //mandar_usuario(){
    
  //}
}

