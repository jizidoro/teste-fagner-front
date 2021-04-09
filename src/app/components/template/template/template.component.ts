import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { GetProveAcessoTokenUsecase } from '../../../core/usecases/prove-token/get-prove-acesso-token.usecase';
import { ProveAcessoTokenModel } from '../../../core/domain/prove-acesso-token';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @Input() tipoLayout: string;
  @Input() isLoading: boolean = false;
  @Input() redirect: string = '/home';
  @Input() textoBreadcrumb: any[];
  @Output() onClickLink? = new EventEmitter();
  @Input() menuCollapsed: boolean = false;
  proveToken: ProveAcessoTokenModel;
  nomeUsuario: string;
  isMobile: boolean;

  constructor(private getProveAcessoTokenUsecase: GetProveAcessoTokenUsecase) {}

  ngOnInit() {
    this.isMobile = window.innerWidth <= 599;

    const localSmenuCollapsed = JSON.parse(localStorage.getItem('menuCollapsed'));
    if (this.isMobile) {
      this.menuCollapsed = true;
    } else {
      if (localSmenuCollapsed) this.menuCollapsed = localSmenuCollapsed == '1';
    }

    this.getProveAcessoTokenUsecase.execute().subscribe((result: ProveAcessoTokenModel) => {
      if (result) {
        this.proveToken = result;
        this.formataNomeUsuario(result.name);
      }
    });
  }

  formataNomeUsuario(nome: string) {
    this.nomeUsuario = nome.replace(
      /(\w)(\w*)/g,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    );

    this.nomeUsuario = this.nomeUsuario.replace(
      /\W*(\w+).*?(\w+)\W*$/,
      (g0, g1, g2) => g1 + ' ' + g2
    );
  }

  fechaMenu($event) {
    this.menuCollapsed = true;
    this.setMenuLocalStorage();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.isMobile = event.target.innerWidth <= 599 ? true : false;
  }

  expadirMenu($event) {
    this.menuCollapsed = false;
    this.setMenuLocalStorage();
  }

  onClick($event) {
    this.onClickLink.emit($event.target.innerText);
  }

  setMenuLocalStorage = () => {
    localStorage.setItem('menuCollapsed', this.menuCollapsed ? '1' : '0');
  };
}
