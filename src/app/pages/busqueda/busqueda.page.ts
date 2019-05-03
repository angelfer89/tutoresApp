import { Component, OnInit } from '@angular/core';
import { Materias } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  materias: Materias[];
  distancia = 0;

  constructor() { 
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
    console.log(materia);
    console.log(this.distancia);
  }

}
