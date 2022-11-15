import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanterasService {

  private API_SERVER = "http://localhost:8080/panteras/"
  constructor(private httpClient: HttpClient) { }

  public getAllPanteras(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public getPantera(id: number): Observable<any>{
    return this.httpClient.get(this.API_SERVER + id);
  }

  public putPantera (pantera:any): Observable<any>{
    return this.httpClient.put(this.API_SERVER + "add/" + pantera.id + "/" + pantera.nombre + "/" + pantera.correo + "/" + pantera.tribu, pantera);
  }

  public deletePantera (pantera:any): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/" + pantera.id);
  }

  public postPantera (pantera:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + pantera.id + "/" + pantera.id, pantera);
  }
}
