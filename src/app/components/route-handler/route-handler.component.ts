import { Component, OnInit } from '@angular/core';
import { SidenavItem } from '../sidenav/sidenav-item/sidenav-item.model';
import * as fromRoot from '../../reducers/index';
import * as fromSidenav from '../sidenav/shared/sidenav.action';
import { SetCurrentlyOpenByRouteAction } from '../sidenav/shared/sidenav.action';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-route-handler',
  templateUrl: './route-handler.component.html',
  styleUrls: ['./route-handler.component.scss'],
})
export class RouteHandlerComponent implements OnInit {
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {}

  ngOnInit() {
    /* Set Sidenav Currently Open on Page load */
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetCurrentlyOpenByRouteAction(event.urlAfterRedirects));
      }
    });

    /* ============================================================================================================== */
    /* Navigation */

    const pricingMenu = new SidenavItem({
      name: 'Pricing',
      icon: '',
      fontawesomeStyle: 'far',
      fontawesomePrefix: 'badge-dollar',
      route: null,
      subItems: [],
      position: 1,
    });

      /* *********************************************** */

      const contratoVerba = new SidenavItem({
        name: 'Contrato de Verba',
        /*fontawesomeStyle: 'fas',
        fontawesomePrefix: 'file-signature',*/
        route: null,
        parent: pricingMenu,
        subItems: [],
        position: 1,
      });
        const contratoVerbaSubItems = [
          new SidenavItem({
            name: 'Novo',
            route: '/contrato-verba/novo',
            parent: contratoVerba,
            subItems: [],
            position: 1,
          }),
          new SidenavItem({
            name: 'Consulta',
            route: '/contrato-verba/consulta',
            parent: contratoVerba,
            subItems: [],
            position: 1,
          }),
          new SidenavItem({
            name: 'Apuração',
            route: '/contrato-verba/apuracao',
            parent: contratoVerba,
            subItems: [],
            position: 1,
          }),
          new SidenavItem({
            name: 'Relatórios',
            route: '/contrato-verba/relatorios',
            parent: contratoVerba,
            subItems: [],
            position: 1,
          }),
        ];

    /* *********************************************** */
    /* config */

    if (pricingMenu.subItems) {
      pricingMenu.subItems.push(contratoVerba);
    }

    if (contratoVerba.subItems) {
      contratoVerba.subItems.push(...contratoVerbaSubItems);
    }

    this.store.dispatch(new fromSidenav.AddSidenavItemAction(pricingMenu));

    /* ////////////////////////////////////////////////////////////////////////////////////////////  */

    const supportMenu = new SidenavItem({
      name: 'Suporte',
      icon: '',
      fontawesomeStyle: 'fas',
      fontawesomePrefix: 'user-headset',
      route: null,
      subItems: [],
      position: 1,
    });

      /* *********************************************** */

      const integration = new SidenavItem({
        name: 'Integração',
        icon: '',
        parent: supportMenu,
        route: null,
        subItems: [],
        position: 1,
      });
        const integrationSubItems = [
          new SidenavItem({
            name: 'Carga',
            route: '/carga',
            /*fontawesomeStyle: 'fas',
            fontawesomePrefix: 'database',*/
            parent: integration,
            subItems: [],
            position: 1,
          }),
          new SidenavItem({
            name: 'Consolidação',
            route: '/carga/consolidacao',
            parent: integration,
            subItems: [],
            position: 1,
          }),
        ];

      /* *********************************************** */

      const parameterization = new SidenavItem({
        name: 'Parametrização',
        icon: '',
        parent: supportMenu,
        route: null,
        subItems: [],
        position: 1,
      });
        const parameterizationSubItems = [
          new SidenavItem({
            name: 'Leitor Busca Preço',
            route: '/leitor-busca-preco',
            parent: parameterization,
            subItems: [],
            position: 1,
          }),
        ];

    /* *********************************************** */
    /* config */

    if (supportMenu.subItems) {
      supportMenu.subItems.push(integration);
      supportMenu.subItems.push(parameterization);
    }

    if (integration.subItems) {
      integration.subItems.push(...integrationSubItems);
    }

    if (parameterization.subItems) {
      parameterization.subItems.push(...parameterizationSubItems);
    }

    this.store.dispatch(new fromSidenav.AddSidenavItemAction(supportMenu));

    /* ============================================================================================================== */
  }
}
