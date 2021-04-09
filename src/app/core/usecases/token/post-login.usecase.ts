import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { SingleD1000ResponseModel } from '../../utils/single-d1000-response-model';
import { TokenModel } from '../../domain/token.model';
import { TokenRepository } from '../../repositories/token.repository';
import { AutenticacaoModel } from 'src/app/core/domain/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class PostLoginUsecase
  implements UseCase<AutenticacaoModel, SingleD1000ResponseModel<TokenModel>> {
  constructor(private processoRepository: TokenRepository) {}

  execute(params: AutenticacaoModel): Observable<SingleD1000ResponseModel<TokenModel>> {
    return this.processoRepository.postLogin(params);
  }
}
