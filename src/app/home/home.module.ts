import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AgmCoreModule } from '@agm/core';
import { ComponentsModule } from '../components/components.module';
import { InfoComponent } from '../components/info/info.component';


@NgModule({
  entryComponents:[
    InfoComponent
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
    ComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
