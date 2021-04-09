import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContratoVerbaNovoComponent } from "./novo/contrato-verba-novo.component";
import { ContratoVerbaConsultaComponent } from "./consulta/contrato-verba-consulta.component";

const routes: Routes = [
  {
    path: 'novo',
    component: ContratoVerbaNovoComponent,
  },
  {
    path: 'consulta',
    component: ContratoVerbaConsultaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContratoVerbaRoutingModule {}
