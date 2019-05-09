import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespGetTutores } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor( private http: HttpClient) { }

  obtenerTutores(lat: number, lng: number)
  {
    return this.http.get<RespGetTutores>('http://localhost/tutores/index.php/TutorService/ObtenerTutores/' + lat + '/' + lng);
  }
}
