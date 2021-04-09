import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilsModule } from '../../../../../components/utils/utils.module';
import { BreadcrumbsModule } from '../../../../../components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ChargeRoutingModule } from '../carga.routing';
import { ChargeStatisticsComponent } from './estatisticas.component';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ChargeRoutingModule,
    BreadcrumbsModule,
    BarChartModule,
    PieChartModule
  ],
  exports: [],
  declarations: [
    ChargeStatisticsComponent,
  ]
})

export class ChargeStatisticsModule {}
