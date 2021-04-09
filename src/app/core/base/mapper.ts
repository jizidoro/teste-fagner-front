import { PageResponseModel } from '../utils/page-response.model';
import { SingleD1000ResponseModel } from '../utils/single-d1000-response-model';

export abstract class Mapper<I, O> {
  abstract mapFrom(param: I): O;

  abstract mapTo(param: O): I;

  mapFromList(param: I[]): O[] {
    const listaRetorno: O[] = [];
    (param || []).forEach((element) => listaRetorno.push(this.mapFrom(element)));
    return listaRetorno;
  }

  responseWebMapFrom(param: SingleD1000ResponseModel<I>): SingleD1000ResponseModel<O> {
    return {
      ...param,
      data: param.data ? this.mapFrom(param.data) : undefined,
    };
  }

  responseGridWebMapFrom(param: PageResponseModel<I>): PageResponseModel<O> {
    return {
      ...param,
      data: param.data?.map(this.mapFrom),
    };
  }
}
