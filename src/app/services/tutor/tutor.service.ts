import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespGetTutores } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor( private http: HttpClient) { }

  obtenerTutores(lat: number, lng: number, distance: number, materiaID: number) {

    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });
// tslint:disable-next-line: max-line-length
    return this.http.get<RespGetTutores>('http://localhost:8080/tutores/index.php/TutorService/ObtenerTutores/' + materiaID + '/' + distance + '/' + lat + '/' + lng, { headers });
  }
}
