import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from '../../../../core/domain/menu.model';
import { GetAllMenusUsecase } from 'src/app/core/usecases/menu/get-all-menu.usecase';
import { GetMenuActiveLocalUsecase } from 'src/app/core/usecases/menu/get-menu-active-local.usecase';
import { menu } from '../menu.routes';
import { SetSessionNavigationUsecase } from 'src/app/core/usecases/session-navigation/set-session-navigation.usecase';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuFullComponent implements OnInit {
  menus: MenuModel[];
  constructor(
    private router: Router,
    private getAllMenus: GetAllMenusUsecase,
    private setSessionNavigationUsecase: SetSessionNavigationUsecase,
    private getMenuActiveLocalUsecase: GetMenuActiveLocalUsecase
  ) {}

  public menu = menu;
  @Output() acaoFechaMenu: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (this.menu == null) {
      this.menu = JSON.parse(localStorage.getItem('proveMenu')) as MenuModel[];
    }
    // if (this.getAllMenus.execute()){
    //   this.getAllMenus.execute().subscribe((value: MenuModel) => {
    //     this.menus.push({
    //       ...value
    //     });
    //   });
    // }
    // this.getMenuActiveLocalUsecase.execute().subscribe((value) => {
    // });
  }

  redirecionaHome() {
    this.router.navigate(['/home']);
  }

  clearSession = () => {
    this.setSessionNavigationUsecase.execute([]);
  };

  clickMenu = () => {
    this.clearSession();

    this.acaoFechaMenu.emit();
  };

  collapseItem = (item, parent: any[]) => {
    if (item.collapsed) {
      parent.map((p) => (p.collapsed = true));
      item.collapsed = false;
    } else {
      item.collapsed = !item.collapsed;
    }
  };
}
