import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { ProdutoGeralModel } from 'src/app/core/domain/produto-geral.model';
import { GetAllProdutoGeralUsecase } from 'src/app/core/usecases/produto-geral/get-all-produto-geral.usecase';
import { ScreenModalService } from 'src/app/components/screen-modal/screen-modal.service';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contrato-verba-pesquisa',
  templateUrl: './contrato-verba-pesquisa.component.html',
  styleUrls: ['./contrato-verba-pesquisa.component.scss'],
})
export class ContratoVerbaPesquisaComponent implements OnInit, OnChanges {
  public constructor(
    private modalService: ScreenModalService,
    public listarPorNome: GetAllProdutoGeralUsecase,
    private changeDetectorRefs: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  titleModal = 'Relação de Produtos';

  @Output() notify = new EventEmitter<any>();
  @Input() pesquisa = '';

  produtoGeralLista!: Observable<ProdutoGeralModel[]>;

  /* //////////////////////////////////////////////////////////////////////// */

  ngOnInit() {}

  ngOnChanges() {
    if (this.pesquisa && this.pesquisa.length >= 3) {
      this.filtrarProduto(this.pesquisa);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open('');
  }

  /* //////////////////////////////////////////////////////////////////////// */

  closeDialog($event: any) {
    if (!$event.target.attributes.id) {
      return;
    }
    let eSelecionado = $event.target.attributes.id.value;

    this.addListaProduto(eSelecionado);
    return this.modalService.close('modal-teste');
  }

  filtrarProduto(data: any) {
    this.listarPorNome.execute(data).subscribe((elemento: ProdutoGeralModel[]) => {
      this.produtoGeralLista = of(elemento);
      this.changeDetectorRefs.detectChanges();
      if (elemento.length <= 0) {
        console.log('nenhum produto encontrado');
        this.snackBar.open('Nenhum produto encontrado, por favor tente novamente', '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    });
  }

  addListaProduto(data: any) {
    this.produtoGeralLista.subscribe((x: ProdutoGeralModel[]) => {
      const teste = x.filter((produtoGeral) => produtoGeral.codigoProduto == data);

      this.notify.emit({
        codigoProd: teste[0].codigoProduto,
        descricaoProd: teste[0].descricaoProduto,
      });
    });
  }
}
