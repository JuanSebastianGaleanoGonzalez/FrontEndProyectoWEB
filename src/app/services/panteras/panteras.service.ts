import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanterasService {

  private API_SERVER = "http://localhost:8080/panteras"
  constructor(private httpClient: HttpClient) { }

  public getAllPanteras(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
