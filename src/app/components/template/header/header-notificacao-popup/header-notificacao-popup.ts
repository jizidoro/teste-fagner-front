import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-header-notificacao-popup',
  templateUrl: './header-notificacao-popup.html',
  styleUrls: ['./header-notificacao-popup.scss'],
})
export class HeaderNotificacaoPopupComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  @Input() show = false;
  @Input() list: any[] = [];

  customEvents = [
    {
      title: 'Visualizar',
      event: (overlaypanel: OverlayPanel, data: any) => {
        overlaypanel.hide();
        this.router.navigate(['/' + data.url]);
      },
    },
  ];

  selectedItem: any;
  selectedItemIndex: any;
  selectItem = (event: any, item: any, index: number, overlaypanel: OverlayPanel) => {
    this.selectedItem = item;
    this.selectedItemIndex = index;

    overlaypanel.toggle(event);
  };

  visualizarTudo = () => {
    this.show = false;
    this.router.navigate(['/home']);
  };
}
