import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespGetTutores, RespGetMaterias, RespGetNiveles, RespGetDistancia } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor( private http: HttpClient) {
  }

  obtenerTutores(lat: number, lng: number, distance: number, materiaID: number) {

    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });
// tslint:disable-next-line: max-line-length
    return this.http.get<RespGetTutores>('http://localhost/tutores/index.php/TutorService/ObtenerTutores/' + materiaID + '/' + distance + '/' + lat + '/' + lng, { headers });
  }

  obtenerNiveles(){
    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });
// tslint:disable-next-line: max-line-length
    return this.http.get<RespGetNiveles>('http://localhost/tutores/index.php/TutorService/ObtenerNiveles/', { headers });
  }

  obtenerMaterias(){
    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    return this.http.get<RespGetMaterias>('http://localhost/tutores/index.php/TutorService/ObtenerMaterias/', { headers });
  }

  obtenerDistanciaMaxima(){
    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    return this.http.get<RespGetDistancia>('http://localhost/tutores/index.php/TutorService/ObtenerDistanciaMaxima/', { headers });
  }

}
