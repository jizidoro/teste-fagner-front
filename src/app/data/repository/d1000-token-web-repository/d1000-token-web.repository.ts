import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { D1000TokenRepository } from '../../../core/repositories/d1000-token.repository';
import { D1000PermissaoTokenModel } from '../../../core/utils/d1000-permissao-token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class D1000TokenWebRepository extends D1000TokenRepository {
  constructor(private http: HttpClient) {
    super();
  }

  setD1000PermissaoToken(param: string): Observable<void> {
    localStorage.setItem('d1000PermissaoToken', param);

    return scheduled([], asyncScheduler);
  }

  getD1000PermissaoToken(): Observable<D1000PermissaoTokenModel> {
    const token = localStorage.getItem('d1000PermissaoToken');

    var tokenDecode = jwt_decode(token || '') as D1000PermissaoTokenModel;

    if (token) {
      return scheduled([tokenDecode], asyncScheduler);
    } else {
      return scheduled([], asyncScheduler);
    }
  }
}
