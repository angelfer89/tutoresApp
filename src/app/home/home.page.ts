import { Component } from '@angular/core';
import { TutorService } from '../services/tutor/tutor.service';
import { UbicacionService } from '../services/ubicacion/ubicacion.service';

import { Tutor } from '../interfaces/interfaces';
import { PopoverController } from '@ionic/angular';
import { InfoComponent } from '../components/info/info.component';


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
               private ubicacionService: UbicacionService) {

    this.lat = 4.6665578;
    this.lng = -74.0524521;
    this.ubicacionService.IniciarGeolocalizacion();
    this.tutorService.obtenerTutores()
                .subscribe( resp  => {
                  console.log('Tutores', resp.tutores);
                  this.tutores = resp.tutores;
                });
  }

  async mostrarInfo(){
    console.log("Mosrat popover");
    const popover = await this.popoverController.create({
      component: InfoComponent
    });

    await popover.present();
  }

}
