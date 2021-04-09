import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { UtilsModule } from '../../components/utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    LoadingModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    PageHeaderModule,
    CdkTableModule,
    MatPaginatorModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
