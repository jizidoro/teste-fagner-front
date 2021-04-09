import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';
import { SinglekpmgResponseModel } from '../../utils/single-kpmg-response-model';
import { Observable } from 'rxjs';
import { ContratoVerbaModel } from '../../domain/contrato-verba-model/contrato-verba.model';

@Injectable({
  providedIn: 'root',
})
export class PostContratoVerbaUsecase
  implements UseCase<ContratoVerbaModel, SinglekpmgResponseModel<ContratoVerbaModel>> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(params: ContratoVerbaModel): Observable<SinglekpmgResponseModel<ContratoVerbaModel>> {
    return this.processoRepository.postContratoVerba(params);
  }
}
