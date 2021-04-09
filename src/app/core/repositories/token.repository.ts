import { Observable } from 'rxjs';
import { AutenticacaoModel } from '../domain/autenticacao.model';
import { TokenModel } from '../domain/token.model';
import { SingleD1000ResponseModel } from '../utils/single-d1000-response-model';

export abstract class TokenRepository {
  abstract postLogin(param: AutenticacaoModel): Observable<SingleD1000ResponseModel<TokenModel>>;
}
