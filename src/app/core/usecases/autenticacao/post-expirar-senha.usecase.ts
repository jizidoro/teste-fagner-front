import { SingleD1000ResponseModel } from '../../utils/single-d1000-response-model';
import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoModel } from '../../domain/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class PostExpirarSenhaUsecase
  implements UseCase<AutenticacaoModel, SingleD1000ResponseModel<AutenticacaoModel>> {
  constructor(private processoRepository: AutenticacaoRepository) {}

  execute(params: AutenticacaoModel): Observable<SingleD1000ResponseModel<AutenticacaoModel>> {
    return this.processoRepository.postExpirarSenha(params);
  }
}
