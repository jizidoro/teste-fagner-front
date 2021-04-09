import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar-content.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
