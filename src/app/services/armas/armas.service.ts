import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArmasService {

  private API_SERVER = "http://localhost:8080/armas/"
  constructor(private httpClient: HttpClient) { }

  public getArmasPantera(id: any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + id);
  }

}
