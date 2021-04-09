import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, FlexLayoutModule, MatRadioModule, MatSelectModule],
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
})
export class SettingsModule {}
