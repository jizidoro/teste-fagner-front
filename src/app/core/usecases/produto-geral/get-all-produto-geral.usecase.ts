import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { PageResponseModel } from '../../utils/page-response.model';
import { PageFilterModel } from '../../utils/page-filter.model';
import { ProdutoGeralModel } from '../../domain/produto-geral.model';
import { ProdutoGeralRepository } from '../../repositories/produto-geral.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllProdutoGeralUsecase implements UseCase<string, ProdutoGeralModel[]> {
  constructor(private processoRepository: ProdutoGeralRepository) {}

  execute(nome: string): Observable<ProdutoGeralModel[]> {
    return this.processoRepository.listarPorNome(nome);
  }
}
