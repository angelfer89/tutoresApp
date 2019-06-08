import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespGetTutores } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor( private http: HttpClient) { }

  obtenerTutores(lat: number, lng: number, distance: number, materiaID: number) {
// tslint:disable-next-line: max-line-length
    //return this.http.get<RespGetTutores>('http://localhost/tutores/index.php/TutorService/ObtenerTutores/' + lat + '/' + lng + '/' + distance + '/' + materiaID);
    return this.http.get<RespGetTutores>('http://localhost/tutores/index.php/TutorService/ObtenerTutores');
  }
}
