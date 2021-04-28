import { NgModule } from '@angular/core';
import { NavRoutingModule } from '../nav.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../../template/template.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AirplaneTableComponent } from './airplane-table.component';
import { AirplaneEditModule } from './AirplaneEdit/airplane-edit.module';

@NgModule({
  imports: [
    NavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    NgxMaskModule.forRoot(),
    CommonModule,
    TemplateModule,
    NgbNavModule,
    AirplaneEditModule,
  ],
  exports: [AirplaneTableComponent],
  declarations: [AirplaneTableComponent],
})
export class AirplaneTableModule {}
