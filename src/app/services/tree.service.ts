import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private apiUrl = 'https://aqh.fitsnr.com/api/aqh/objects';
  constructor(private http: HttpClient) { }

  //funcion para obtener los objetos desde la API

  getTrees(): Observable<any[]> {
    //custom header con el token requerido 5Dt4y4fN1Eh8lX1cFKtO
    const headers = new HttpHeaders().set('X-Token', '5Dt4y4fN1Eh8lX1cFKtO');
    return this.http.get<any[]>(this.apiUrl, { headers: headers });
  }
}
