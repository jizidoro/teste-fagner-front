import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '../utils/utils.module';
import { ToolbarUserButtonComponent } from './toolbar-user-button/toolbar-user-button.component';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ToolbarBetaComponent } from './toolbar-beta/toolbar-beta.component';
import { SearchComponent } from './search/search.component';
import { ToolbarNavigationComponent } from './toolbar-navigation/toolbar-navigation.component';
import { ToolbarNavigationItemComponent } from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-item.component';
import { ToolbarNavigationDropdownItemComponent } from './toolbar-navigation/toolbar-navigation-item/toolbar-navigation-dropdown-item/toolbar-navigation-dropdown-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    UtilsModule,
    MatRippleModule,
  ],
  declarations: [
    ToolbarUserButtonComponent,
    ToolbarNotificationsComponent,
    SearchBarComponent,
    ToolbarBetaComponent,
    SearchComponent,
    ToolbarNavigationComponent,
    ToolbarNavigationItemComponent,
    ToolbarNavigationDropdownItemComponent,
  ],
  exports: [
    ToolbarUserButtonComponent,
    ToolbarNotificationsComponent,
    SearchBarComponent,
    ToolbarBetaComponent,
    SearchComponent,
    ToolbarNavigationComponent,
    ToolbarNavigationItemComponent,
    ToolbarNavigationDropdownItemComponent,
  ],
})
export class ToolbarModule {}
