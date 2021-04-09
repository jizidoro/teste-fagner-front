import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { ContratoVerbaRepository } from '../../repositories/contrato-verba.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteContratoVerbaUsecase implements UseCase<number, void> {
  constructor(private processoRepository: ContratoVerbaRepository) {}

  execute(id: number): Observable<void> {
    return this.processoRepository.deleteContratoVerba(id);
  }
}
