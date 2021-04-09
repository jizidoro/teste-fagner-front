import { Component, HostBinding, ViewChild, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ContratoVerbaModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba.model';
import { PostContratoVerbaUsecase } from 'src/app/core/usecases/contrato-verba/post-contrato-verba.usecase';
import { ContratoVerbaProdModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba-prod.model';
import { ContratoVerbaFilialModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba-filial.model';
import { ContratoVerbaProdUsoModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba-prod-uso.model';
import { LookupModel } from '../../../../core/utils/lookup.model';
import { BaUsuLookupPorNomeUsecase } from '../../../../core/lookup-usecases/ba-usu-lookup/ba-usu-lookup-por-nome.usecase';
import { ScreenModalService } from '../../../../components/screen-modal/screen-modal.service';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetkpmgPermissaoTokenUsecase } from 'src/app/core/usecases/kpmg-token/get-kpmg-permissao-token.usecase';
import { kpmgPermissaoTokenModel } from 'src/app/core/utils/kpmg-permissao-token.model';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-contrato-verba-novo',
  templateUrl: './contrato-verba-novo.component.html',
  styleUrls: ['./contrato-verba-novo.component.scss'],
})
export class ContratoVerbaNovoComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;
  public registerInfoForm!: FormGroup;
  public registerProdutoForm!: FormGroup;
  public registerProdutoUsoForm!: FormGroup;

  teste = false;

  @ViewChild('componenteBusca') componenteBusca: any;

  public isCreate = true;

  filteredOptions: Observable<LookupModel[]> | undefined;
  myControl = new FormControl();

  tableHeaderSelected = 'sku';

  today = new Date().toISOString().split('T')[0];
  isToday = new Date().toLocaleDateString();

  pesquisaProduto = '';

  changesInput: any[] = [];

  columns = ['Código', 'Descrição', 'Item', 'Limite'];

  isShownPdtUso = false;
  isHidePdtUso = true;
  isAllHide = false;
  valorQuatidade = 'Valor Item';

  isSelected = false;
  isRemoved = false;

  isSelectedP = false;
  isRemovedP = false;

  contractMovementType = 'ctMovementOut';
  tipoContrato = '';

  searchResult: any;

  produtoOuProdUso = '';

  usuarioLogado!: Observable<kpmgPermissaoTokenModel>;

  public constructor(
    private fb: FormBuilder,
    private modalService: ScreenModalService,
    private postContratoVerba: PostContratoVerbaUsecase,
    private baUsuLookupPorNome: BaUsuLookupPorNomeUsecase,
    public getkpmgPermissaoTokenUsecase: GetkpmgPermissaoTokenUsecase,
    private snackBar: MatSnackBar
  ) {}

  task: Task = {
    name: 'Selecionar todos',
    completed: false,
    subtasks: [
      { name: 'FL001', completed: false },
      { name: 'FL002', completed: false },
    ],
  };

  /* //////////////////////////////////////////////////////////////////////// */

  ModalOpen = false;

  respostaModalProdutos($event: any) {
    this.changesInput.push($event);
    if (this.produtoOuProdUso === 'produto') {
      this.addNewRowDaPesquisa($event);
    } else if (this.produtoOuProdUso === 'produtoUso') {
      this.addNewRowDaPesquisaUso($event);
    }
  }

  /* //////////////////////////////////////////////////////////////////////// */

  ngOnInit() {
    this.startForm();
    this.getkpmgPermissaoTokenUsecase.execute().subscribe((usuario: kpmgPermissaoTokenModel) => {
      this.usuarioLogado = of(usuario);
      console.log(usuario);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open('');
  }

  dialogSearch($event: any) {
    let evento = $event.target.value;
    if (evento.length < 3) {
      this.snackBar.open('Por favor, digite 3 ou mais caracteres', '', {
        duration: 3000,
      });
      return;
    }
    this.produtoOuProdUso = 'produto';
    this.pesquisaProduto = evento;
    this.modalService.open('modal-teste');
    $event.target.value = '';
  }

  dialogSearchProdUso($event: any) {
    let evento = $event.target.value;
    if (evento.length < 3) {
      this.snackBar.open('Por favor, digite 3 ou mais caracteres', '', {
        duration: 3000,
      });
      return;
    }
    this.produtoOuProdUso = 'produtoUso';
    this.pesquisaProduto = evento;
    this.modalService.open('modal-teste');
    $event.target.value = '';
  }

  onFocusEvent(event: any) {
    event.target.type = 'date';
  }

  buscarNegociador($event: any) {
    let qntLetras = $event.target.value.length;
    let values = $event.target.value;
    let verificaNumero = Number($event.target.value);

    if (qntLetras >= 1 && !isNaN(verificaNumero)) {
      this._listaNegociador(values);
    } else if (qntLetras >= 3) {
      this._listaNegociador(values);
    } else {
      this.filteredOptions = of([]);
    }
  }

  displayFn(user: LookupModel): string {
    return user && user.value ? user.value : '';
  }

  _listaNegociador(values: any) {
    this.baUsuLookupPorNome.execute(values).subscribe((result: LookupModel[]) => {
      this.componenteBusca.nativeElement.click();
      this.filteredOptions = of(result);
    });
  }

  toggleShow(element: string) {
    if (element === '2') {
      this.isShownPdtUso = true;
      this.valorQuatidade = 'Quantidade';
      this.isHidePdtUso = false;
      this.isAllHide = true;
    } else if (element === '1') {
      this.isShownPdtUso = false;
      this.valorQuatidade = 'Valor Item';
      this.isHidePdtUso = true;
      this.isAllHide = true;
    } else {
      this.isShownPdtUso = false;
      this.isAllHide = false;
    }
    this.listaProdutos.clear();
    this.listaProdutoUsos.clear();
    this.tipoContrato = element;
  }

  clearFormArray = () => {
    let selecProd = [];
    for (let control of this.listaProdutos.controls) {
      if (control.value.selecionado === true || this.isSelected) {
        selecProd.push(this.listaProdutos.controls.indexOf(control));
      }
    }
    for (let index of selecProd.reverse()) {
      this.listaProdutos.removeAt(index);
    }
    if (this.isSelected) {
      this.isSelected = !this.isSelected;
      this.isRemoved = !this.isRemoved;
    }
  };

  clearFormArrayProdutoUso = () => {
    let selecProdUso = [];
    for (let control of this.listaProdutoUsos.controls) {
      if (control.value.selecionadoUso === true || this.isSelectedP) {
        selecProdUso.push(this.listaProdutoUsos.controls.indexOf(control));
      }
    }
    for (let index of selecProdUso.reverse()) {
      this.listaProdutoUsos.removeAt(index);
    }
    if (this.isSelectedP) {
      this.isSelectedP = !this.isSelectedP;
      this.isRemovedP = !this.isRemovedP;
    }
  };

  public startForm() {
    this.registerInfoForm = this.fb.group({
      idUsuario: ['12345'],
      contratoAtivo: [false],
      nomeContrato: ['Lorem ipsum dolor', Validators.required],
      idUsuNegociador: ['98765'],
      negociador: ['Thaiz Izidoro Antunes', Validators.required],
      tipoContrato: ['1'],
      tipoMovimentacao: ['1'],
      dataCriacao: [this.today],
      responsavelCriacao: [this.usuarioLogado],
      periodoVigenciaInicio: ['2021-03-16', Validators.required],
      periodoVigenciaFinal: ['2021-03-31', Validators.required],
      valorRessarcimento: ['100', Validators.required],
      valorLimite: ['1000', Validators.required],
      mecanicaContrato: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta nobis repellendus cum atque perferendis iste beatae? Libero ea ipsum, quod dicta rerum perspiciatis, sed provident esse neque, officiis quasi!',
        Validators.required,
      ],
    });

    this.registerProdutoForm = this.fb.group({
      listaProdutos: this.fb.array([]),
    });

    this.registerProdutoUsoForm = this.fb.group({
      listaProdutoUsos: this.fb.array([]),
    });
  }

  private createTableRowDaPesquisa(pdtGeral: any): FormGroup {
    return this.fb.group({
      codigoProduto: new FormControl(pdtGeral.codigoProd, {
        validators: [Validators.required],
      }),
      descricaoProduto: new FormControl(pdtGeral.descricaoProd, {
        validators: [Validators.required],
      }),
      selecionado: new FormControl(this.isSelected, {
        validators: [Validators.required],
      }),
      valorItem: new FormControl('0', {
        validators: [Validators.required],
      }),
      quantidadeItem: new FormControl('0', {
        validators: [Validators.required],
      }),
      valorLimiteItem: new FormControl('10000', {
        validators: [Validators.required],
      }),
    });
  }

  private createTableRowDaPesquisaUso(pdtGeral: any): FormGroup {
    return this.fb.group({
      codigoProdutoUso: new FormControl(pdtGeral.codigoProd, {
        validators: [Validators.required],
      }),
      descricaoProdutoUso: new FormControl(pdtGeral.descricaoProd, {
        validators: [Validators.required],
      }),
      selecionadoUso: new FormControl(this.isSelected, {
        validators: [Validators.required],
      }),
      quantidadeItemUso: new FormControl('0', {
        validators: [Validators.required],
      }),
      valorLimiteItemUso: new FormControl('10000', {
        validators: [Validators.required],
      }),
    });
  }

  get f() {
    return this.registerInfoForm.controls;
  }

  get listaProdutos(): FormArray {
    return this.registerProdutoForm.get('listaProdutos') as FormArray;
  }

  get listaProdutoUsos(): FormArray {
    return this.registerProdutoUsoForm.get('listaProdutoUsos') as FormArray;
  }

  addNewRowDaPesquisa(pdtGeral: any): void {
    this.listaProdutos.push(this.createTableRowDaPesquisa(pdtGeral));
  }

  addNewRowDaPesquisaUso(pdtGeral: any): void {
    this.listaProdutoUsos.push(this.createTableRowDaPesquisaUso(pdtGeral));
  }

  onDeleteRow(rowIndex: number): void {
    this.listaProdutos.removeAt(rowIndex);
  }

  onDeleteRowProdutoUso(rowIndexUso: number): void {
    this.listaProdutoUsos.removeAt(rowIndexUso);
  }

  validarInfoForm(): boolean {
    var sDate = this.registerInfoForm.value.periodoVigenciaInicio;
    var eDate = this.registerInfoForm.value.periodoVigenciaFinal;
    if (sDate != null && eDate != null && eDate < sDate) {
      this.snackBar.open('A data final de vigecia não deve ser menor que a data inicial.', '', {
        duration: 3000,
      });
      return false;
    } else if (this.registerInfoForm.invalid) {
      this.snackBar.open('Algo deu errado. Por favor, revise as Informações do contrato', '', {
        duration: 3000,
      });
      return false;
    } else {
      return true;
    }
  }

  validarProdutoForm(): boolean {
    if (this.registerProdutoForm.invalid) {
      this.snackBar.open('Algo deu errado. Por favor, revise o formulario de produto', '', {
        duration: 3000,
      });
      return false;
    }
    return true;
  }

  validarProdutoUsoForm(): boolean {
    if (this.registerProdutoUsoForm.invalid) {
      this.snackBar.open('Algo deu errado. Por favor, revise o formulario de produto Uso', '', {
        duration: 3000,
      });
      return false;
    }
    return true;
  }

  validarForms() {
    var infoForm = this.validarInfoForm();
    var produtoForm = this.validarProdutoForm();
    var produtoUsoForm = this.validarProdutoUsoForm();
    if (infoForm && produtoForm && produtoUsoForm) {
      this.save();
      console.log('ta salvo!');
      return;
    }
    console.log('nao deu certo bixão');
    return;
  }

  async save() {
    const data: ContratoVerbaModel = {
      idUsuario: this.registerInfoForm.value.idUsuario,
      contratoAtivo: this.registerInfoForm.value.contratoAtivo,
      nomeContrato: this.registerInfoForm.value.nomeContrato,
      tipoContrato: this.registerInfoForm.value.tipoContrato,
      tipoMovimentacao: this.registerInfoForm.value.tipoMovimentacao,
      idUsuNegociador: this.registerInfoForm.value.idUsuNegociador,
      negociador: this.registerInfoForm.value.negociador,
      dataCriacao: this.registerInfoForm.value.dataCriacao,
      responsavelCriacao: this.registerInfoForm.value.responsavelCriacao,
      periodoVigenciaInicio: this.registerInfoForm.value.periodoVigenciaInicio,
      periodoVigenciaFinal: this.registerInfoForm.value.periodoVigenciaFinal,
      valorRessarcimento: this.registerInfoForm.value.valorRessarcimento,
      valorLimite: this.registerInfoForm.value.valorLimite,
      mecanicaContrato: this.registerInfoForm.value.mecanicaContrato,
      listacontratoVerbaFiliais: this.getListFormFiliais(),
      listacontratoVerbaProds: this.getListFormProdutos(),
      listacontratoVerbaProdUsos: this.getListFormProdutoUsos(),
    };
    this.postContratoVerba.execute(data).subscribe((result) => {
      console.log(data);
    });
  }

  getListFormFiliais(): ContratoVerbaFilialModel[] {
    let result: ContratoVerbaFilialModel[];

    result = [];

    var prodForm = this.registerProdutoForm.value.listaProdutos;
    prodForm.forEach((element: any) => {
      const option = {} as ContratoVerbaFilialModel;
      id: element.id,
        (option.idContratoVerba = element.idContratoVerba),
        (option.idBandeira = element.idBandeira),
        (option.idClusterFilial = element.idClusterFilial),
        (option.idFilial = element.idFilial),
        result.push(option);
      console.log(option);
    });
    return result;
  }

  getListFormProdutos(): ContratoVerbaProdModel[] {
    let result: ContratoVerbaProdModel[];

    result = [];

    var prodForm = this.registerProdutoForm.value.listaProdutos;
    prodForm.forEach((element: any) => {
      const option = {} as ContratoVerbaProdModel;
      option.codigoProduto = element.codigoProduto;
      option.descricaoProduto = element.descricaoProduto;
      option.valorItem = element.valorItem;
      option.quantidadeItem = element.quantidadeItem;
      option.valorLimiteItem = element.valorLimiteItem;
      result.push(option);
      console.log(option);
    });

    return result;
  }
  getListFormProdutoUsos(): ContratoVerbaProdUsoModel[] {
    let result: ContratoVerbaProdUsoModel[];

    result = [];

    var prodUsoForm = this.registerProdutoUsoForm.value.listaProdutoUsos;
    prodUsoForm.forEach((element: any) => {
      const option = {} as ContratoVerbaProdUsoModel;
      option.codigoProdutoUso = element.codigoProdutoUso;
      option.descricaoProdutoUso = element.descricaoProdutoUso;
      option.quantidadeItemUso = element.quantidadeItemUso;
      option.valorLimiteItemUso = element.valorLimiteItemUso;
      result.push(option);
      console.log(option);
    });

    return result;
  }
}
