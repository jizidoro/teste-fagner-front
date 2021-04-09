import { Observable } from 'rxjs';
import { D1000PermissaoTokenModel } from '../utils/d1000-permissao-token.model';

export abstract class D1000TokenRepository {
  [x: string]: any;
  abstract getD1000PermissaoToken(): Observable<D1000PermissaoTokenModel>;
  abstract setD1000PermissaoToken(param: string): Observable<void>;
}
