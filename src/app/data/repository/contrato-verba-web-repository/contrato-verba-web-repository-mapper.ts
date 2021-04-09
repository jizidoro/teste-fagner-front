import { ContratoVerbaProdModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba-prod.model';
import { ContratoVerbaModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba.model';
import { Mapper } from '../../../core/base/mapper';
import {
  ContratoVerbaWebEntity,
  FcContratoVerbaFilialWebEntity,
  FcContratoVerbaProdUsoWebEntity,
  FcContratoVerbaProdWebEntity,
} from './contrato-verba-web-entity';
import { ContratoVerbaProdUsoModel } from '../../../core/domain/contrato-verba-model/contrato-verba-prod-uso.model';
import { ContratoVerbaFilialModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba-filial.model';
export class ContratoVerbaWebRepositoryMapper extends Mapper<
  ContratoVerbaWebEntity,
  ContratoVerbaModel
> {
  mapFrom(param: ContratoVerbaWebEntity): ContratoVerbaModel {
    return {
      idUsuario: param.idUsu,
      contratoAtivo: param.contratoAtivo,
      idUsuNegociador: param.idUsuNegociador,
      nomeContrato: param.dsContratoVerba,
      tipoContrato: param.tpContratoVerba,
      tipoMovimentacao: param.tpMovimentacao,
      negociador: param.dsUsuNegociador,
      dataCriacao: param.dtCad,
      responsavelCriacao: param.dsUsu,
      periodoVigenciaInicio: param.dtIni,
      periodoVigenciaFinal: param.dtFim,
      valorRessarcimento: param.vlrRessarcimento,
      valorLimite: param.vlrLimiteContrato,
      mecanicaContrato: param.mecanicaContrato,
      id: param.id,
      dtLiberacao: param.dtLiberacao,
      dsUsuLiberacao: param.dsUsuLiberacao,
      idUsuLiberacao: param.idUsuLiberacao,
      idUsuUltAlt: param.idUsuUltAlt,
      dsUsuUltAlt: param.dsUsuUltAlt,
      dtUltAlt: param.dtUltAlt,

      listacontratoVerbaFiliais:
        param.fcContratoVerbaFiliais != null && param.fcContratoVerbaFiliais.length > 0
          ? this.mapDetalheFilialFrom(param.fcContratoVerbaFiliais)
          : [],
      listacontratoVerbaProds:
        param.fcContratoVerbaProds != null && param.fcContratoVerbaProds.length > 0
          ? this.mapDetalheProdutoFrom(param.fcContratoVerbaProds)
          : [],
      listacontratoVerbaProdUsos:
        param.fcContratoVerbaProdUsos != null && param.fcContratoVerbaProdUsos.length > 0
          ? this.mapDetalheProdutoUsoFrom(param.fcContratoVerbaProdUsos)
          : [],
    };
  }

  mapDetalheFilialFrom(param?: FcContratoVerbaFilialWebEntity[]): ContratoVerbaFilialModel[] {
    const listaFiliais: any = [];
    if (param) {
      param.forEach((element) => {
        const dados = {
          id: element.id,
          idContratoVerba: element.idContratoVerba,
          idBandeira: element.idBandeira,
          idClusterFilial: element.idClusterFilial,
          idFilial: element.idFilial,
        };
        listaFiliais.push(dados);
      });
    }
    return listaFiliais;
  }

  mapDetalheProdutoFrom(param?: FcContratoVerbaProdWebEntity[]): ContratoVerbaProdModel[] {
    const listaProdutos: any = [];
    if (param) {
      param.forEach((element) => {
        const dados = {
          codigoProduto: element.idProd,
          descricaoProduto: element.dsProd,
          valorItem: element.vlrVerbaProd,
          quantidadeItem: element.qtdeProd,
          valorLimiteItem: element.vlrLimiteProd,
        };
        listaProdutos.push(dados);
      });
    }
    return listaProdutos;
  }

  mapDetalheProdutoUsoFrom(param?: FcContratoVerbaProdUsoWebEntity[]): ContratoVerbaProdUsoModel[] {
    const listaProdutoUsos: any = [];
    if (param) {
      param.forEach((element) => {
        const dados = {
          codigoProdutoUso: element.idProd,
          descricaoProdutoUso: element.dsProd,
          quantidadeItemUso: element.qtdeProd,
          valorLimiteItemUso: element.vlrLimiteProd,
        };
        listaProdutoUsos.push(dados);
      });
    }
    return listaProdutoUsos;
  }

  mapTo(param: ContratoVerbaModel): ContratoVerbaWebEntity {
    return {
      idUsu: param.idUsuario,
      contratoAtivo: param.contratoAtivo,
      idUsuNegociador: param.idUsuNegociador,
      dsContratoVerba: param.nomeContrato,
      tpContratoVerba: param.tipoContrato,
      tpMovimentacao: param.tipoMovimentacao,
      dsUsuNegociador: param.negociador,
      dtCad: param.dataCriacao,
      dsUsu: param.responsavelCriacao,
      dtIni: param.periodoVigenciaInicio,
      dtFim: param.periodoVigenciaFinal,
      vlrRessarcimento: param.valorRessarcimento,
      vlrLimiteContrato: param.valorLimite,
      mecanicaContrato: param.mecanicaContrato,
      id: param.id,
      dtLiberacao: param.dtLiberacao,
      dsUsuLiberacao: param.dsUsuLiberacao,
      idUsuLiberacao: param.idUsuLiberacao,
      idUsuUltAlt: param.idUsuUltAlt,
      dsUsuUltAlt: param.dsUsuUltAlt,
      dtUltAlt: param.dtUltAlt,

      fcContratoVerbaFiliais: this.mapDetalheFilialTo(param.listacontratoVerbaFiliais),
      fcContratoVerbaProds: this.mapDetalheProdutoTo(param.listacontratoVerbaProds),
      fcContratoVerbaProdUsos: this.mapDetalheProdutoUsoTo(param.listacontratoVerbaProdUsos),
    };
  }

  mapDetalheFilialTo(param?: ContratoVerbaFilialModel[]): FcContratoVerbaFilialWebEntity[] {
    const listaFiliais = [] as FcContratoVerbaFilialWebEntity[];
    if (param) {
      param.forEach((element) => {
        const dados: FcContratoVerbaFilialWebEntity = {
          id: element.id,
          idContratoVerba: element.idContratoVerba,
          idBandeira: element.idBandeira,
          idClusterFilial: element.idClusterFilial,
          idFilial: element.idFilial,
        };
        listaFiliais.push(dados);
      });
    }
    return listaFiliais;
  }

  mapDetalheProdutoTo(param?: ContratoVerbaProdModel[]): FcContratoVerbaProdWebEntity[] {
    const listaProdutos = [] as FcContratoVerbaProdWebEntity[];
    if (param) {
      param.forEach((element) => {
        const dados: FcContratoVerbaProdWebEntity = {
          idProd: element.codigoProduto,
          dsProd: element.descricaoProduto,
          vlrVerbaProd: element?.valorItem,
          qtdeProd: element?.quantidadeItem,
          vlrLimiteProd: element.valorLimiteItem,
        };
        listaProdutos.push(dados);
      });
    }
    return listaProdutos;
  }

  mapDetalheProdutoUsoTo(param?: ContratoVerbaProdUsoModel[]): FcContratoVerbaProdUsoWebEntity[] {
    const listaProdutoUsos = [] as FcContratoVerbaProdUsoWebEntity[];
    if (param) {
      param.forEach((element) => {
        const dados: FcContratoVerbaProdUsoWebEntity = {
          id: element.id,
          idProd: element.codigoProdutoUso,
          dsProd: element.descricaoProdutoUso,
          qtdeProd: element.quantidadeItemUso,
          vlrLimiteProd: element.valorLimiteItemUso,
        };
        listaProdutoUsos.push(dados);
      });
    }
    return listaProdutoUsos;
  }
}
