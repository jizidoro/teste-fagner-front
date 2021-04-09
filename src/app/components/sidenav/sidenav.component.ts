import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../reducers/index';
import { SidenavItem } from './sidenav-item/sidenav-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input('layout')
  layout!: string;
  @Input('collapsed')
  collapsed!: boolean | null;
  @Output('toggledSidenavCollapse') toggledSidenavCollapse = new EventEmitter();

  sidenavItems: Observable<SidenavItem[]> | any;
  currentlyOpen!: Observable<SidenavItem[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.sidenavItems = this.store.select(fromRoot.getSidenavItems);
    this.currentlyOpen = this.store.select(fromRoot.getSidenavCurrentlyOpen);
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

  ngOnDestroy() {}
}
