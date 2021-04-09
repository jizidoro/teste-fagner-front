import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChargeComponent } from './carga.component';
import { ChargeStatisticsComponent } from './estatisticas/estatisticas.component';

const routes: Routes = [
  {
    path: '',
    component: ChargeComponent,
  },
  {
    path: 'estatisticas',
    component: ChargeStatisticsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChargeRoutingModule { }
