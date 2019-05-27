import { Component, OnInit, Input } from '@angular/core';
import { Materia } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  materias: Materia[];
  distancia = 0;
  materiaSeleccionada: Materia;

  constructor(private modalController: ModalController) {
    this.materias = [
      {
        id: 1,
        nombre: 'Matemáticas'
      },
      {
        id: 2,
        nombre: 'Física'
      },
      {
        id: 3,
        nombre: 'Química'
      },
      {
        id: 4,
        nombre: 'Inglés'
      },
      {
        id: 5,
        nombre: 'Programación'
      }
    ];

    this.materiaSeleccionada = this.materias[0];
  }

  ngOnInit() {
  }

  realizarBusqueda() {
    this.modalController.dismiss({
      distancia: this.distancia / 1000, // Pasa de kilometros a metros
      materiaID: this.materiaSeleccionada.id
    });
  }

  seleccionado(materia: Materia) {
    this.materiaSeleccionada = materia;
  }

  cancelarModal() {
    this.modalController.dismiss();
  }
}
