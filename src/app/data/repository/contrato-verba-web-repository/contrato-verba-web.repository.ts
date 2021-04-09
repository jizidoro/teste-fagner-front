import { SingleD1000ResponseModel } from '../../../core/utils/single-d1000-response-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, take, toArray } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { ContratoVerbaRepository } from 'src/app/core/repositories/contrato-verba.repository';
import { ContratoVerbaWebRepositoryMapper } from './contrato-verba-web-repository-mapper';
import { ContratoVerbaModel } from 'src/app/core/domain/contrato-verba-model/contrato-verba.model';
import { ContratoVerbaWebEntity } from './contrato-verba-web-entity';
import { PageResponseModel } from '../../../core/utils/page-response.model';
import { PageFilterModel } from '../../../core/utils/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';

@Injectable({
  providedIn: 'root',
})
export class ContratoVerbaWebRepository extends ContratoVerbaRepository {
  mapper = new ContratoVerbaWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  postContratoVerba(
    param: ContratoVerbaModel
  ): Observable<SingleD1000ResponseModel<ContratoVerbaModel>> {
    var request = this.http
      .post<SingleD1000ResponseModel<ContratoVerbaWebEntity>>(
        `${environment.CONTRATOVERBA}FcContratoVerba/incluir`,
        this.mapper.mapTo(param)
      )
      .pipe(
        map((x) => {
          return this.mapper.responseWebMapFrom(x.data);
        })
      );

    return request;
  }

  getAllContratoVerba(filter: PageFilterModel): Observable<PageResponseModel<ContratoVerbaModel>> {
    var request = this.http
      .getAll<PageResponseModel<ContratoVerbaWebEntity>>(
        `${environment.CONTRATOVERBA}FcContratoVerba/listar${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }
}
