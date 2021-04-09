import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProveAcessoTokenModel } from '../../../../core/domain/prove-acesso-token';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile-component.component.html',
  styleUrls: ['./header-mobile-component.component.scss'],
})
export class HeaderMobileComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private location: Location) {}

  @Input() nomeUsuario: string;
  proveToken: ProveAcessoTokenModel;

  voltarPagina(rotaRedirect: string) {
    rotaRedirect ? this.router.navigate(['/' + rotaRedirect]) : this.location.back();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
