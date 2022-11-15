import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'FrontEndPanteras';

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  administradorClick(): void{
      this.router.navigate(['administrador']);
  }

  usuarioClick():void{
    this.router.navigate(['usuario']);
  }
}

