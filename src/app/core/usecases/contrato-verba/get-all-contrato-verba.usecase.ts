import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';
import { ContratoVerbaModel } from '../../domain/contrato-verba-model/contrato-verba.model';
import { PageResponseModel } from '../../utils/page-response.model';
import { PageFilterModel } from '../../utils/page-filter.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllContratoVerbaUsecase
  implements UseCase<PageFilterModel, PageResponseModel<ContratoVerbaModel>> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(filter: PageFilterModel): Observable<PageResponseModel<ContratoVerbaModel>> {
    return this.processoRepository.getAllContratoVerba(filter);
  }
}
