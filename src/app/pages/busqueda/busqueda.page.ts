import { Component, OnInit, Input } from '@angular/core';
import { Materias } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  materias: Materias[];
  distancia = 0;

  constructor(private modalController: ModalController) { 
    this.materias = [
      {
        nombre: 'Matemáticas',
        seleccionada: false
      }, 
      {
        nombre: 'Física',
        seleccionada: true
      },
      {
        nombre: 'Química',
        seleccionada: false
      },
      {
        nombre: 'Inglés',
        seleccionada: false
      },
      {
        nombre: 'Programación',
        seleccionada: false
      }
    ];
  }

  ngOnInit() {
  }

  realizarBusqueda(){

    const materia = this.materias.filter(item => {
      return item.seleccionada == true;
    });

    this.modalController.dismiss({
      distancia: this.distancia,
      materia: materia[0].nombre
    });

  }

  cancelarModal(){
    this.modalController.dismiss();
  }



}
