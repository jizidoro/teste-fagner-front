import { Component, HostBinding, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../main/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [...ROUTE_TRANSITION],
})
export class HomeComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  isLoading = false;

  public constructor() {}
  ngOnInit() {}
}
