import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListaPanterasComponent } from './lista-panteras/lista-panteras.component';
import { ListaArmasComponent } from './lista-armas/lista-armas.component';

const appRoutes: Routes=[
  {path:'pantera', component:ListaPanterasComponent},
  {path:'armas', component:ListaArmasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListaPanterasComponent,
    ListaArmasComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
