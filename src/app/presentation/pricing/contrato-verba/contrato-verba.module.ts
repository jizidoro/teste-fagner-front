import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratoVerbaRoutingModule } from './contrato-verba.routing';
import { ContratoVerbaNovoModule } from './novo/contrato-verba-novo.module';
import { ContratoVerbaConsultaModule } from "./consulta/contrato-verba-consulta.module";

@NgModule({
  imports: [
    CommonModule,
    ContratoVerbaRoutingModule,
    ContratoVerbaNovoModule,
    ContratoVerbaConsultaModule,
  ],
  declarations: [],
})

export class ContratoVerbaModule {}
