import { Component, HostBinding, ViewChild, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../../main/app.animation';
import { MatDialog } from '@angular/material/dialog';

import { ContratoVerbaHistoricoComponent } from './historico/contrato-verba-historico.component';
import { ContratoVerbaVisualizarComponent } from './visualizar/contrato-verba-visualizar.component';
import { ContratoVerbaModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba.model';
import { GetAllContratoVerbaUsecase } from '../../../../core/usecases/contrato-verba/get-all-contrato-verba.usecase';
import { PageFilterModel } from '../../../../core/utils/page-filter.model';
import { PageResponseModel } from '../../../../core/utils/page-response.model';

@Component({
  selector: 'app-contrato-verba-consulta',
  templateUrl: './contrato-verba-consulta.component.html',
  styleUrls: ['./contrato-verba-consulta.component.scss'],
  animations: [...ROUTE_TRANSITION],
})
export class ContratoVerbaConsultaComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  public constructor(
    public dialog: MatDialog,
    public getAllContratoVerba: GetAllContratoVerbaUsecase
  ) {}

  /* //////////////////////////////////////////////////////////////////////// */

  ModalOpen = false;
  allComplete = false;
  filterOrderSelected = 'order';
  isHidden = false;

  cVerbaListaConsulta: ContratoVerbaModel[] = [];

  dialogHistory() {
    const dialogRef = this.dialog.open(ContratoVerbaHistoricoComponent, {
      id: 'dialog-budget-contract-history',
    });

    this.ModalOpen = true;

    dialogRef.afterClosed().subscribe((r) => {
      this.ModalOpen = false;
    });
  }

  /* ///////////// */

  dialogPreview() {
    const dialogRef = this.dialog.open(ContratoVerbaVisualizarComponent, {
      id: 'dialog-budget-contract-preview',
    });

    this.ModalOpen = true;

    dialogRef.afterClosed().subscribe((r) => {
      this.ModalOpen = false;
    });
  }

  /* //////////////////////////////////////////////////////////////////////// */

  updateAllComplete() {
    this.allComplete =
      this.cVerbaListaConsulta != null && this.cVerbaListaConsulta.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.cVerbaListaConsulta == null) {
      return false;
    }
    return this.cVerbaListaConsulta.filter((t) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.cVerbaListaConsulta == null) {
      return;
    }
    this.cVerbaListaConsulta.forEach((t) => (t.completed = completed));
  }

  /* //////////////////////////////////////////////////////////////////////// */

  click() {
    this.isHidden = !this.isHidden;
  }

  /* //////////////////////////////////////////////////////////////////////// */

  ngOnInit() {
    this.listarTodosContratos();
  }

  listarTodosContratos() {
    let teste = new PageFilterModel();

    console.log('aqui');

    this.getAllContratoVerba
      .execute(teste)
      .subscribe((x: PageResponseModel<ContratoVerbaModel>) => {
        this.cVerbaListaConsulta = x.data as ContratoVerbaModel[];
      });
  }

  itemSelecionado(tipoBusca: string) {
    if (tipoBusca === 'status') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'code') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'name') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'created') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'period') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'authorizationDate') {
      console.log('status foi o escolhido');
    } else if (tipoBusca === 'order') {
      console.log('status foi o escolhido');
    }
  }

  filtrarContrato(config: ContratoVerbaModel) {
    if (config.id === 'teste') {
      console.log('teste');
    }
  }

  onEnter($event: any) {
    let values = $event.target.value;
    console.log(values);
  }
}
