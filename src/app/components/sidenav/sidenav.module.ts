import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavCollapseDirective } from './sidenav-collapse.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  declarations: [SidenavComponent, SidenavItemComponent, SidenavCollapseDirective],
  exports: [SidenavComponent, SidenavCollapseDirective],
})
export class SidenavModule {}
