import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { TemplateModule } from '../template/template.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavRoutingModule } from './nav.routing';
import { NavComponent } from './nav.component';

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
  ],
  exports: [
    NavComponent,
  ],
  declarations: [NavComponent],
})
export class NavModule {}
