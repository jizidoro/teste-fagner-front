import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import * as sidenavAction from '../shared/sidenav.action';
import { SidenavItem } from './sidenav-item.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  scrollbar: any;

  @Input('item')
  item!: SidenavItem;

  @Input('currentlyOpen')
  currentlyOpen!: SidenavItem[] | null;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  toggleDropdown() {
    if (this.item.hasSubItems()) {
      this.store.dispatch(new sidenavAction.ToggleOpenSidenavItemAction(this.item));
    }
  }

  isOpen(item: SidenavItem) {
    if (this.currentlyOpen) {
      return this.currentlyOpen.indexOf(item) > -1;
    } else {
      return false;
    }
  }

  // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
  getSubMenuHeight(): string {
    return this.getSubMenuItemsCount(this.item) * 48 + 'px';
  }

  // Counts the amount of Sub Items there is and returns the count.
  getSubMenuItemsCount(item: SidenavItem): number {
    let count = 0;

    if (item.hasSubItems() && this.isOpen(item) && item.subItems) {
      count += item.subItems.length;

      item.subItems.forEach((subItem) => {
        count += this.getSubMenuItemsCount(subItem);
      });
    }

    return count;
  }
}
