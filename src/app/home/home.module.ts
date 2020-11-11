import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { BusquedaPage } from '../pages/busqueda/busqueda.page';
import { BusquedaPageModule } from '../pages/busqueda/busqueda.module';

@NgModule({
  entryComponents: [
    BusquedaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8uQtNNni6u2VGY3UwWJ3e5fUu6Qf7H-s'
    }),
    AgmJsMarkerClustererModule,
    BusquedaPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
