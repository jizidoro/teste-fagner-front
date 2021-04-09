import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../../main/app.animation';

export interface tableList {
  branch: string;
  description: string;
  date: string;
  hour: string;
  completed: boolean;
  tableItem?: tableList[];
}

@Component({
  selector: 'charge',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss'],
  animations: [...ROUTE_TRANSITION],
})

export class ChargeComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  @Input() charge: any;

  public constructor() {}

  /* //////////////////////////////////////////////////////////////////////// */

  filterBranchSelected = 'fl009';
  filterChargeSelected = 'order';

  tableList: tableList = {
    branch: '',
    description: '',
    date: '',
    hour: '',
    completed: false,
    tableItem: [
      {
        branch: 'FL009',
        description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        date: '01/02/2021',
        hour: '10:15:17',
        completed: false
      },
      /* TEMP */
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      {branch: 'FL009',description: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',date: '01/02/2021',hour: '10:15:17',completed: false},
      /* /TEMP */
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.tableList.tableItem != null && this.tableList.tableItem.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.tableList.tableItem == null) {
      return false;
    }
    return this.tableList.tableItem.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.tableList.tableItem == null) {
      return;
    }
    this.tableList.tableItem.forEach(t => t.completed = completed);
  }

  ngOnInit() {}
}
