import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumoapiRoutingModule } from './consumoapi-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ConsumoapiRoutingModule
  ]
})
export class ConsumoapiModule { }
