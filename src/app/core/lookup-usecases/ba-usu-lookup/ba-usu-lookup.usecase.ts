import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { BaUsuLookupRepository } from '../../lookup-repository/ba-usu-lookup.repository';
import { LookupModel } from '../../utils/lookup.model';

@Injectable({
  providedIn: 'root',
})
export class BaUsuLookupUsecase implements UseCase<void, LookupModel[]> {
  constructor(private lookupRepository: BaUsuLookupRepository) {}

  execute(): Observable<LookupModel[]> {
    return this.lookupRepository.listar();
  }
}
