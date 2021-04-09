import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../../../../components/utils/utils.module';
import { BreadcrumbsModule } from '../../../../components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageHeaderModule } from '../../../../components/page-header/page-header.module';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChargeRoutingModule } from './carga.routing';
import { ChargeStatisticsModule } from './estatisticas/estatisticas.module';

import { ChargeComponent } from './carga.component';
import { BranchesModule } from "../../../../components/branches/branches.module";

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    BreadcrumbsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    PageHeaderModule,
    MatExpansionModule,
    MatTooltipModule,
    FontAwesomeModule,
    ChargeRoutingModule,
    ChargeStatisticsModule,
    BranchesModule,
  ],
  exports: [],
  declarations: [ChargeComponent],
})
export class ChargeModule {}
