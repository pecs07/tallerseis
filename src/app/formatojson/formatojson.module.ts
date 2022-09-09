import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatojsonRoutingModule } from './formatojson-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormatojsonRoutingModule
  ]
})
export class FormatojsonModule { }
