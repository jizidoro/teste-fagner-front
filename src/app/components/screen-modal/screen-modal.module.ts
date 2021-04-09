import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenModalComponent } from './screen-modal.component';
import { ScreenModalService } from './screen-modal.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ScreenModalComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [ScreenModalService],
  exports: [ScreenModalComponent],
})
export class ScreenModalModule {}
