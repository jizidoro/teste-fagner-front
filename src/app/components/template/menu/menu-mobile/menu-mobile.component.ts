import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from '../../../../core/domain/menu.model';
import { ProveAcessoTokenModel } from 'src/app/core/domain/prove-acesso-token';
import { ProvePermissaoTokenModel } from '../../../../core/domain/prove-permissao-token';
import { menu } from '../menu.routes';
import { MsalService } from '../../../../msal/msal.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuMobileComponent implements OnInit {
  constructor(private router: Router, private authService: MsalService) {}

  menus: MenuModel[];

  @Input() nomeUsuario: string;
  proveToken: ProveAcessoTokenModel;

  @Output() acaoFechaMenu: EventEmitter<string> = new EventEmitter<string>();

  public parametroCollapsed = true;
  public manualLojaCollapsed = true;
  public checkListCollapsed = true;
  public gestaoPessoasCollapsed = true;

  public correcaoOverlapMobile = true;
  public menu = menu;
  cargo = '';

  ngOnInit() {
    if (this.menu == null) {
      this.menu = JSON.parse(localStorage.getItem('proveMenu')) as MenuModel[];
    }
    const permissao = JSON.parse(
      localStorage.getItem('provePermissaoToken')
    ) as ProvePermissaoTokenModel;
    if (permissao) {
      this.cargo = permissao.cargo;
    }
  }

  redirecionaHome() {
    this.router.navigate(['/home']);
  }

  fechaMenu() {
    this.correcaoOverlapMobile = false;
    this.acaoFechaMenu.emit();
  }

  logout() {
    this.authService.logout();
  }
}
