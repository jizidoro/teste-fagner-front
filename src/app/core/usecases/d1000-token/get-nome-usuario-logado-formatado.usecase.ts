import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable, Subject } from 'rxjs';
import { D1000TokenRepository } from '../../repositories/d1000-token.repository';
import { D1000PermissaoTokenModel } from '../../utils/d1000-permissao-token.model';

@Injectable({
  providedIn: 'root',
})
export class GetNomeUsuarioLogadoFormatadoUsecase implements UseCase<void, string> {
  constructor(private d1000TokenRepository: D1000TokenRepository) {}

  execute(): Observable<string> {
    const subject = new Subject<string>();

    this.d1000TokenRepository
      .getD1000PermissaoToken()
      .subscribe((result: D1000PermissaoTokenModel) => {
        if (result) {
          let nomeUsuario = result.nome.replace(
            /(\w)(\w*)/g,
            (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
          );

          nomeUsuario = nomeUsuario.replace(/\W*(\w+).*?(\w+)\W*$/, (g0, g1, g2) => g1 + ' ' + g2);

          subject.next(nomeUsuario);
        }
      });

    return subject.asObservable();
  }
}
