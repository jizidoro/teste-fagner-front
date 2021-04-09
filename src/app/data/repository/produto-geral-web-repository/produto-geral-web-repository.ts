import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProdutoGeralModel } from 'src/app/core/domain/produto-geral.model';
import { ProdutoGeralRepository } from 'src/app/core/repositories/produto-geral.repository';
import { PageFilterModel } from 'src/app/core/utils/page-filter.model';
import { PageResponseModel } from 'src/app/core/utils/page-response.model';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment.prod';
import { makeParamFilterGrid } from '../../helper.repository';
import { LookupWebEntity } from '../../lookup-repository/helpers/lookup-web-entity';
import { ProdutoGeralWebEntity } from './produto-geral-web-entity';
import { ProdutoGeralWebRepositoryMapper } from './produto-geral-web-repository-mapper';

@Injectable({
  providedIn: 'root',
})
export class ProdutoGeralWebRepository extends ProdutoGeralRepository {
  mapper = new ProdutoGeralWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  getAllProdutoGeral(filter: PageFilterModel): Observable<PageResponseModel<ProdutoGeralModel>> {
    var request = this.http
      .getAll<PageResponseModel<ProdutoGeralWebEntity>>(
        `${environment.PRODUTO}BaProd/listar${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }

  listarPorNome(nome: string): Observable<ProdutoGeralModel[]> {
    return this.http
      .getAll<ProdutoGeralModel[]>(`${environment.PRODUTO}BaProd/obter-por-nome/${nome}`)
      .pipe(
        map((item) => {
          return item.data;
        })
      )
      .pipe(
        map((item: any) => {
          return this.mapper.mapFromList(item.data);
        })
      );
  }
}
