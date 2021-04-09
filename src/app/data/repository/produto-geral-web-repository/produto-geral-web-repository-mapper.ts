import { ProdutoGeralModel } from 'src/app/core/domain/produto-geral.model';
import { Mapper } from '../../../core/base/mapper';
import { ProdutoGeralWebEntity } from './produto-geral-web-entity';

export class ProdutoGeralWebRepositoryMapper extends Mapper<
  ProdutoGeralWebEntity,
  ProdutoGeralModel
> {
  mapFrom(param: ProdutoGeralWebEntity): ProdutoGeralModel {
    return {
      codigoProduto: param.id,
      descricaoProduto: param.dsProd,
      fabricanteProduto: param.dsFabricante,
    };
  }

  mapTo(param: ProdutoGeralModel): ProdutoGeralWebEntity {
    return {
      id: param.codigoProduto,
      dsProd: param.descricaoProduto,
      dsFabricante: param.fabricanteProduto,
    };
  }
}
