import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoModel } from '../../domain/autenticacao.model';
import { SingleD1000ResponseModel } from '../../utils/single-d1000-response-model';

@Injectable({
  providedIn: 'root',
})
export class PostEsquecerSenhaUsecase
  implements UseCase<AutenticacaoModel, SingleD1000ResponseModel<AutenticacaoModel>> {
  constructor(private processoRepository: AutenticacaoRepository) {}

  execute(params: AutenticacaoModel): Observable<SingleD1000ResponseModel<AutenticacaoModel>> {
    return this.processoRepository.postEsquecerSenha(params);
  }
}
