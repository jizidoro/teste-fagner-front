import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';
import { SingleD1000ResponseModel } from '../../utils/single-d1000-response-model';
import { Observable } from 'rxjs';
import { ContratoVerbaModel } from '../../domain/contrato-verba-model/contrato-verba.model';

@Injectable({
  providedIn: 'root',
})
export class PostContratoVerbaUsecase
  implements UseCase<ContratoVerbaModel, SingleD1000ResponseModel<ContratoVerbaModel>> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(params: ContratoVerbaModel): Observable<SingleD1000ResponseModel<ContratoVerbaModel>> {
    return this.processoRepository.postContratoVerba(params);
  }
}
