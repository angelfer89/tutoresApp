import { Component } from '@angular/core';
import { TutorService } from '../services/tutor/tutor.service';

import { Tutor } from '../interfaces/interfaces';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';
import { InfoComponent } from '../components/info/info.component';
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
               private popoverController: PopoverController,
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

  buscarTutores(distance: number, materia: string){
    this.geolocation.getCurrentPosition().then((resp) => {

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      // Valores de prueba
      this.lat = 4.6665578;
      this.lng = -74.0524521;

      this.tutorService.obtenerTutores(this.lat, this.lng)
                      .subscribe( resp => {
                        console.log('Tutores', resp.tutores);
                        if(resp.tutores.length == 0){
                          this.mostrarAlert();
                        }
                        else{
                          this.tutores = resp.tutores;
                        }
      });

      }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  async abrirBusqueda(){
    const modal = await this.modalController.create({
      component: BusquedaPage
    });
    await modal.present();

    //Recibe los valores de la pagina del modal
    const { data } = await modal.onDidDismiss();

    this.buscarTutores(data['distancia'], data['materia'])
  }

  async mostrarInfo(event: any){
    const popover = await this.popoverController.create({
      component: InfoComponent,
      event: event
    });
    await popover.present();
  }

  async mostrarAlert() {
    const alert = await this.alertController.create({
      header: 'Sin información',
      message: 'No hay tutores cerca de su localización, pruebe aumentando el rango en metros o esperemos a que tutores se registren',
      buttons: ['OK']
    });

    await alert.present();
  }

}
