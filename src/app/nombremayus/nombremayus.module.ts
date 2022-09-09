import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NombremayusRoutingModule } from './nombremayus-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NombremayusRoutingModule
  ]
})
export class NombremayusModule { }
