import { Component, OnInit } from '@angular/core';


export interface tableList {
  name: string;
  completed: boolean;
  tableItem?: tableList[];
}

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})

export class BranchesComponent implements OnInit {

  constructor() {}

  /* //////////////////////////////////////////////////////////////////////// */

  allComplete = false;

  tableList: tableList = {
    name: 'Selecionar todos',
    completed: false,
    tableItem: [
      { name: 'FL001', completed: false },
      /* TEMP */
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      { name: 'FL002', completed: false },
      /* /TEMP */
    ],
  };

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

  /* //////////////////////////////////////////////////////////////////////// */

  ngOnInit() {}
}
