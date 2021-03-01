import { Component} from '@angular/core';
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


export class HomePage{

  
  lat: number;
  lng: number;
  tutores: Tutor[];
  
  constructor( private tutorService: TutorService,
               private modalController: ModalController,
               private alertController: AlertController,
               private geolocation: Geolocation) {

    this.obtenerGeolocalizacion();
  }

  obtenerGeolocalizacion(){

    // Se reinician los valores
    this.lat = null;
    this.lng = null;

    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      
      }).catch((error) => {
        if(error.code == 1) // Si el usuario no permitio acceder a la ubicación
          this.mostrarAlert(3);
          else
            this.mostrarAlert(4); // Cualquier otro error
    });
  }

  buscarTutores(distance: number, materiaID: number) {
    this.tutores = []; // Limpia el resultado anterior

    this.tutorService.obtenerTutores(this.lat, this.lng, distance, materiaID)
                    .subscribe( resp => {
                      if(resp.error == true){
                        this.mostrarAlert(2);
                      }
                      else{
                        if (resp.tutores.length === 0) {
                          this.mostrarAlert(1);
                        } else {
                          this.tutores = resp.tutores;
                          this.obtenerGeolocalizacion();
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

    if(numAlerta == 3){
      const alert = await this.alertController.create({
        header: 'Info',
        message: 'Por favor, permite que Thuton acceda a la ubicacion de este dispositivo',
        buttons: ['OK']
      });
      await alert.present();
    }

    if(numAlerta == 4){
      const alert = await this.alertController.create({
        header: 'Info',
        message: 'Por el momento Thuton no puede obtener la ubicacion de este dispositivo, verifica tu conexión',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
