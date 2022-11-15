import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdministradoresService {

  private API_SERVER = "http://localhost:8080/admin/"
  constructor(private httpClient: HttpClient) { }

  public getAllAdministradores(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
