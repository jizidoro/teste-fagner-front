import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';
import { ContratoVerbaModel } from '../../domain/contrato-verba-model/contrato-verba.model';

@Injectable({
  providedIn: 'root',
})
export class PutContratoVerbaUsecase implements UseCase<ContratoVerbaModel, void> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(params: ContratoVerbaModel): Observable<void> {
    return this.processoRepository.putContratoVerba(params);
  }
}
