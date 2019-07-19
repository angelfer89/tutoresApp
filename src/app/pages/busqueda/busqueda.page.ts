import { Component, OnInit, Input } from '@angular/core';
import { Materia, Nivel, Distancia } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { TutorService } from '../../services/tutor/tutor.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  materias: Materia[];
  distancia = 100;
  materiaSeleccionada: Materia;
  niveles: Nivel[];
  materiasServicio: Materia[];
  iniciarBusqueda = false;
  maxDistancia: number;

  constructor(private modalController: ModalController, private tutorService: TutorService) {

    this.tutorService.obtenerNiveles().subscribe( resp => {
      this.niveles = resp.niveles;
    });

    this,tutorService.obtenerMaterias().subscribe( resp => {
      this.materiasServicio = resp.materias;
    });

    this.tutorService.obtenerDistanciaMaxima().subscribe( resp => {
      this.maxDistancia = resp.distancia[0]["valor"];
    });
  }

  ngOnInit() {
  }

  // Cierra el modal y envia los parametros a la pagina de home
  realizarBusqueda() {
    this.modalController.dismiss({
      distancia: this.distancia / 1000, // Pasa de metros a kilometros
      materiaID: this.materiaSeleccionada.idMateria
    });
  }

  seleccionado(materia: Materia) {
    this.materiaSeleccionada = materia;
    this.iniciarBusqueda = true;
  }

  nivelSeleccionado(event: any) {
    this.materias = this.materiasServicio.filter( materia => {
      return materia.nivel == event.detail.value;
    });
    this.iniciarBusqueda = false;
  }

  // Cierra el modal sin enviar parametros
  cancelarModal() {
    this.modalController.dismiss();
  }
}
