import { Observable } from 'rxjs';
import { ContratoVerbaModel } from '../domain/contrato-verba-model/contrato-verba.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResponseModel } from '../utils/page-response.model';
import { SingleD1000ResponseModel } from '../utils/single-d1000-response-model';

export abstract class ContratoVerbaRepository {
  abstract postContratoVerba(
    param: ContratoVerbaModel
  ): Observable<SingleD1000ResponseModel<ContratoVerbaModel>>;
  abstract getAllContratoVerba(
    filter: PageFilterModel
  ): Observable<PageResponseModel<ContratoVerbaModel>>;
}
