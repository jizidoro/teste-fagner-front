import { Observable } from 'rxjs';
import { LookupModel } from '../utils/lookup.model';

export abstract class BaUsuLookupRepository {
  abstract listar(): Observable<LookupModel[]>;
  abstract listarPorNome(nome: string): Observable<LookupModel[]>;
}
