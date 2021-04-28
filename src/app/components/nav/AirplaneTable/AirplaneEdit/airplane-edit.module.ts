import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { AirplaneEditComponent } from './airplane-edit.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateModule } from '../../../template/template.module';
import { NavRoutingModule } from '../../nav.routing';
import { ScreenModalModule } from '../../../screen-modal/screen-modal.module';

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
    ScreenModalModule,
  ],
  exports: [AirplaneEditComponent],
  declarations: [AirplaneEditComponent],
})
export class AirplaneEditModule {}
