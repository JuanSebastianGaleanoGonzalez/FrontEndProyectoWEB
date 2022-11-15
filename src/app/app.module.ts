import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPanterasComponent } from './components/administrador/listado-panteras/listado-panteras.component';
import { ListadoAdministradoresComponent } from './components/administrador/listado-administradores/listado-administradores.component';
import { ListadoArmasComponent } from './components/usuario/listado-armas/listado-armas.component';
import { InformacionUsuarioComponent } from './components/usuario/informacion-usuario/informacion-usuario.component';
import { AdministradorComponent } from './components/administrador/administrador/administrador.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';

const appRoutes: Routes=[
  {path:'administrador', component:AdministradorComponent},
  {path:'administrador/listaPanteras', component:ListadoPanterasComponent},
  {path:'administrador/listaAdministradores', component:ListadoAdministradoresComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'usuario/informacionUsuario/:id', component:InformacionUsuarioComponent},
  {path:'usuario/listaArmas/:id', component:ListadoArmasComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListadoPanterasComponent,
    ListadoAdministradoresComponent,
    ListadoArmasComponent,
    InformacionUsuarioComponent,
    AdministradorComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
