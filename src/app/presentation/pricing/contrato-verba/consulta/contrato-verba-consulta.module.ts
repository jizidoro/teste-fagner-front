import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbsModule } from '../../../../components/breadcrumbs/breadcrumbs.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ContratoVerbaConsultaComponent } from "./contrato-verba-consulta.component";
import { ContratoVerbaHistoricoComponent } from "./historico/contrato-verba-historico.component";
import { ContratoVerbaVisualizarComponent } from "./visualizar/contrato-verba-visualizar.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    BreadcrumbsModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatAutocompleteModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [],
  declarations: [
    ContratoVerbaConsultaComponent,
    ContratoVerbaHistoricoComponent,
    ContratoVerbaVisualizarComponent,
  ],
})

export class ContratoVerbaConsultaModule {}
