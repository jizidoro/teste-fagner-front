import { Observable } from 'rxjs';
import { AutenticacaoModel } from '../domain/autenticacao.model';
import { SingleD1000ResponseModel } from '../utils/single-d1000-response-model';

export abstract class AutenticacaoRepository {
  abstract postExpirarSenha(
    param: AutenticacaoModel
  ): Observable<SingleD1000ResponseModel<AutenticacaoModel>>;
  abstract postEsquecerSenha(
    param: AutenticacaoModel
  ): Observable<SingleD1000ResponseModel<AutenticacaoModel>>;
}
