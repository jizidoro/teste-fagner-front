import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { TemplateModule } from '../../components/template/template.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    TemplateModule,
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
