import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';
import { ContratoVerbaModel } from '../../domain/contrato-verba-model/contrato-verba.model';

@Injectable({
  providedIn: 'root',
})
export class GetContratoVerbaByIdUsecase implements UseCase<number, ContratoVerbaModel> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(params: number): Observable<ContratoVerbaModel> {
    return this.processoRepository.getContratoVerbaById(params);
  }
}
