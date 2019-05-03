import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  latitud: number;
  longitud: number;

  constructor(private geolocation: Geolocation) {
    console.log('Hello UbicacionProvider Provider');
  }
  
  IniciarGeolocalizacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      //this.latitud = resp.coords.latitude;
      //this.longitud = resp.coords.longitude;
      console.log(resp.coords);
      }).catch((error) => {
        console.log('Error getting location', error);
    });
  }
}
