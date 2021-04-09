import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface tableList {
  id: string;
  name: string;
  type: string;
  created: string;
  negotiator: string;
  author: string;
  startDate: string;
  endDate: string;
  authorizationDate: string;
  status: string;
  repayment: string;
  valueUnitary: string;
  valueLimit: string;
  authorized: string;
  editedUser: string;
  editedDate: string;
  editedTime: string;
  branch: string;
  completed: boolean;
  tableItem?: tableList[];
}

@Component({
  selector: 'contrato-verba-visualizar',
  templateUrl: './contrato-verba-visualizar.component.html',
  styleUrls: ['./contrato-verba-visualizar.component.scss'],
})
export class ContratoVerbaVisualizarComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  public constructor(public dialog: MatDialogRef<ContratoVerbaVisualizarComponent>) {}

  /* //////////////////////////////////////////////////////////////////////// */

  filterOrderSelected = 'order';
  allComplete = false;

  tableList: tableList = {
    id: '',
    name: '',
    type: '',
    created: '',
    negotiator: '',
    author: '',
    startDate: '',
    endDate: '',
    authorizationDate: '',
    status: '',
    repayment: '',
    valueUnitary: '',
    valueLimit: '',
    authorized: '',
    editedUser: '',
    editedDate: '',
    editedTime: '',
    branch: '',
    completed: false,
    tableItem: [
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL001',
        completed: false,
      },
      /* TEMP */
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL002',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL003',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL004',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL005',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL006',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL007',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL008',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL009',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL010',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL011',
        completed: false,
      },
      {
        id: '12345678',
        name: 'Lorem ipsum dolor sit amet consectetur adisciplin elit',
        type: 'Saída',
        created: '01/02/2021',
        negotiator: 'Humberto Erler',
        author: 'Marcello Martins',
        startDate: '01/02/2021',
        endDate: '31/12/2021',
        authorizationDate: '01/02/2021',
        status: 'Vigente',
        repayment: '20.000,00',
        valueUnitary: '120,00',
        valueLimit: '120.000,00',
        authorized: 'Alexandre Pereira',
        editedUser: 'Thaiz Isidoro',
        editedDate: '22/03/2021',
        editedTime: '10:37',
        branch: 'FL012',
        completed: false,
      },
      /* /TEMP */
    ],
  };

  /* //////////////////////////////////////////////////////////////////////// */

  closeDialog() {
    const dialogRef = this.dialog.close(null);
  }

  /* //////////////////////////////////////////////////////////////////////// */

  updateAllComplete() {
    this.allComplete =
      this.tableList.tableItem != null && this.tableList.tableItem.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.tableList.tableItem == null) {
      return false;
    }
    return this.tableList.tableItem.filter((t) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.tableList.tableItem == null) {
      return;
    }
    this.tableList.tableItem.forEach((t) => (t.completed = completed));
  }

  /* //////////////////////////////////////////////////////////////////////// */

  ngOnInit() {}
}
