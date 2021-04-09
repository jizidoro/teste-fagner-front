import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbsModule } from '../../../../components/breadcrumbs/breadcrumbs.module';
import { BranchesModule } from '../../../../components/branches/branches.module';
import { ContratoVerbaNovoComponent } from './contrato-verba-novo.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { customCurrencyMaskConfig } from 'src/app/services/formats/dinheiro';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ContratoVerbaPesquisaComponent } from './pesquisa/contrato-verba-pesquisa.component';
import { ScreenModalModule } from '../../../../components/screen-modal/screen-modal.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatTabsModule,
    MatRadioModule,
    MatTooltipModule,
    BreadcrumbsModule,
    FontAwesomeModule,
    MatExpansionModule,
    NgxMaskModule.forRoot(),
    BranchesModule,
    NgxCurrencyModule,
    ScreenModalModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    MatSnackBarModule,
  ],
  exports: [],
  declarations: [ContratoVerbaNovoComponent, ContratoVerbaPesquisaComponent],
})
export class ContratoVerbaNovoModule {}
