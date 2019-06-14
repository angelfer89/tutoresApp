import { Component } from '@angular/core';
import { TutorService } from '../services/tutor/tutor.service';

import { Tutor } from '../interfaces/interfaces';
import { ModalController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BusquedaPage } from '../pages/busqueda/busqueda.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: number;
  lng: number;
  tutores: Tutor[];


  constructor( private tutorService: TutorService,
               private modalController: ModalController,
               private alertController: AlertController,
               private geolocation: Geolocation) {

      this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  /*buscarTutores(distance: number, materiaID: number) {
    this.tutores = []; // Limpia el resultado anterior

    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      // Valores de prueba
      this.lat = 4.6665578;
      this.lng = -74.0524521;

      this.tutorService.obtenerTutores(this.lat, this.lng, distance, materiaID)
                      .subscribe( resp => {
                        console.log('Tutores', resp.tutores);
                        if (resp.tutores.length === 0) {
                          this.mostrarAlert();
                        } else {
                          this.tutores = resp.tutores;
                        }
      });

      }).catch((error) => {
        console.log('Error getting location', error);
    });
  }*/

  buscarTutores(distance: number, materiaID: number) {
    this.tutores = []; // Limpia el resultado anterior

    // Valores de prueba
    this.lat = 4.6665578;
    this.lng = -74.0524521;

    this.tutorService.obtenerTutores(this.lat, this.lng, distance, materiaID)
                    .subscribe( resp => {
                      console.log('Tutores', resp);
                      if(resp.error == true){
                        this.mostrarAlert(2);
                      }
                      else{
                        console.log('Tutores', resp.tutores);
                        if (resp.tutores.length === 0) {
                          this.mostrarAlert(1);
                        } else {
                          this.tutores = resp.tutores;
                        }
                      }
      });
  }


  async abrirBusqueda() {
    const modal = await this.modalController.create({
      component: BusquedaPage
    });
    await modal.present();

    // Recibe los valores de la pagina del modal
    const { data } = await modal.onDidDismiss();

    if (data !== undefined) {
      this.buscarTutores(data['distancia'], data['materiaID']);
    }
  }

  async mostrarAlert(numAlerta) {

    if(numAlerta == 1){
      const alert = await this.alertController.create({
        header: 'Sin información',
        message: 'No hay tutores cerca de su localización, pruebe aumentando el rango en metros o esperemos a que tutores se registren',
        buttons: ['OK']
      });
      await alert.present();
    }
    
    if(numAlerta == 2){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ocurrió un error inesperado, intentar más tarde',
        buttons: ['OK']
      });
      await alert.present();
    }

    
  }

}
