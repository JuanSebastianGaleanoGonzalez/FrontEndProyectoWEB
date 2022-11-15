import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagPanteraService {

  private API_SERVER = "http://localhost:8080/panteras/consulta/"
  constructor(private httpClient: HttpClient) { }

  public consulta (usuario:any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + usuario.usuario +"/"+usuario.clave);  
  }


}
