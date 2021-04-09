import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ProveAcessoTokenModel } from '../../../../core/domain/prove-acesso-token';
import { ProvePermissaoTokenModel } from '../../../../core/domain/prove-permissao-token';
import { GetAllNotificacaoAlertaUsecase } from 'src/app/core/usecases/notificacao-alerta/get-all-notificacao-alerta-grid.usecase';
import { MsalService } from '../../../../msal/msal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private location: Location,
    private authService: MsalService,
    private getAllNotificacaoAlerta: GetAllNotificacaoAlertaUsecase
  ) {}

  @Input() nomeUsuario: string;
  cargo: string = '';
  proveToken: ProveAcessoTokenModel;

  listNotification = [];

  voltarPagina(rotaRedirect: string) {
    rotaRedirect ? this.router.navigate(['/' + rotaRedirect]) : this.location.back();
  }

  ngOnInit() {
    const permissao = JSON.parse(
      localStorage.getItem('provePermissaoToken')
    ) as ProvePermissaoTokenModel;
    if (permissao) {
      this.cargo = permissao.cargo;
    }

    this.getGrid();
  }

  logout() {
    this.authService.logout();
  }

  getGrid = () => {
    this.listNotification = [];
    this.getAllNotificacaoAlerta.execute({ page: 0, size: 10000 }).subscribe((n) => {
      this.listNotification = n.content.map((c) => ({
        notificacoes: c.notificacao,
        time: c.dataInicio,
      }));
    });
  };

  selectItem = (event: any, overlaypanel: OverlayPanel) => {
    overlaypanel.toggle(event);
  };

  ngOnDestroy() {}

  popup = false;
  togglePopup = () => (this.popup = !this.popup);
}
