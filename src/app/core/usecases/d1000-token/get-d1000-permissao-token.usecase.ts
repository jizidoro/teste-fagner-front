import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { D1000TokenRepository } from '../../repositories/d1000-token.repository';
import { D1000PermissaoTokenModel } from '../../utils/d1000-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetD1000PermissaoTokenUsecase implements UseCase<void, D1000PermissaoTokenModel> {
  constructor(private d1000TokenRepository: D1000TokenRepository) {}

  execute(): Observable<D1000PermissaoTokenModel> {
    return this.d1000TokenRepository.getD1000PermissaoToken();
  }
}
