import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consumoapi',
    loadChildren: () => import('./consumoapi/consumoapi.module').then(m => m.ConsumoapiModule)
  },
  {
    path: 'convernum',
    loadChildren: () => import('./convernum/convernum.module').then(m => m.ConvernumModule)
  },
  {
    path: 'formatojson',
    loadChildren: () => import('./formatojson/formatojson.module').then(m => m.FormatojsonModule)
  },
  {
    path: 'nombremayus',
    loadChildren: () => import('./nombremayus/nombremayus.module').then(m => m.NombremayusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
