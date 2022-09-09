import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvernumRoutingModule } from './convernum-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ConvernumRoutingModule
  ]
})
export class ConvernumModule { }
