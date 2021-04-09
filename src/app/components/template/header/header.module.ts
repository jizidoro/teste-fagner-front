import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HeaderMobileComponent } from './header-mobile-component/header-mobile-component.component';
import { HeaderNotificacaoPopupComponent } from './header-notificacao-popup/header-notificacao-popup';

@NgModule({
  declarations: [HeaderComponent, HeaderMobileComponent, HeaderNotificacaoPopupComponent],
  imports: [CommonModule, FlexLayoutModule, MenuModule, RouterModule, OverlayPanelModule],
  exports: [HeaderComponent, HeaderMobileComponent],
})
export class HeaderModule {}
