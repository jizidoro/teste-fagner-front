import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatMenuModule, MatButtonModule],
  declarations: [BarChartComponent],
  exports: [BarChartComponent],
})
export class BarChartModule {}
