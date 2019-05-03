import { Component } from '@angular/core';
import { TutorService } from '../services/tutor/tutor.service';
import { Tutor } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: 10.22;
  lng: 10.32;
  tutores: Tutor[];

  constructor( private tutorService: TutorService){
    console.log("Hola");
    this.tutorService.obtenerTutores()
                .subscribe( resp  => {
                  console.log('Tutores', resp.tutores);
                  this.tutores = resp.tutores;
                });
  }

}
