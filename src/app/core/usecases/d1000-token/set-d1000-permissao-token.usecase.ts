import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { D1000TokenRepository } from '../../repositories/d1000-token.repository';

@Injectable({
  providedIn: 'root',
})
export class SetD1000PermissaoTokenUsecase implements UseCase<string, void> {
  constructor(private d1000TokenRepository: D1000TokenRepository) {}

  execute(param: string): Observable<void> {
    return this.d1000TokenRepository.setD1000PermissaoToken(param);
  }
}
