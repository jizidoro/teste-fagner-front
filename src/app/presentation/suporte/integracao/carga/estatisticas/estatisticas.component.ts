import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../../../main/app.animation';

@Component({
  selector: 'charge-statistics',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss'],
  animations: [...ROUTE_TRANSITION],
})
export class ChargeStatisticsComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  @Input() charge: any;

  public constructor() {}

  ngOnInit() {}
}
