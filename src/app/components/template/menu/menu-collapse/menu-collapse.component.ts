import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from '../../../../core/domain/menu.model';
import { GetAllMenusUsecase } from 'src/app/core/usecases/menu/get-all-menu.usecase';
import { GetMenuActiveLocalUsecase } from 'src/app/core/usecases/menu/get-menu-active-local.usecase';
import { menu } from '../menu.routes';

@Component({
  selector: 'app-menu-collapse',
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuCollapseComponent implements OnInit {
  menus: MenuModel[];
  constructor(
    private router: Router,
    private getAllMenus: GetAllMenusUsecase,
    private getMenuActiveLocalUsecase: GetMenuActiveLocalUsecase
  ) {}

  public parametroCollapsed = true;
  public manualLojaCollapsed = true;
  public checkListCollapsed = true;
  public gestaoPessoasCollapsed = true;

  @Output() notify: EventEmitter<any[]> = new EventEmitter<any[]>();

  public menu = menu;

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

  expandirMenu(item) {
    this.menu.forEach((element) => {
      if (element.label === item.label) {
        element.collapsed = false;
      } else {
        element.collapsed = true;
      }
    });
    this.notify.emit();
  }

  getStyles() {
    return {};
  }
}
