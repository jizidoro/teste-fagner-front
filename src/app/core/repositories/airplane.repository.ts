import { Observable } from 'rxjs';
import { AirplaneModel } from '../domain/airplane.model';
import { PageFilterModel } from '../utils/page-filter.model';
import { PageResponseModel } from '../utils/page-response.model';

export abstract class AirplaneRepository {
  abstract getAirplaneById(id: number): Observable<AirplaneModel>;
  abstract getAllAirplane(filter: PageFilterModel): Observable<PageResponseModel<AirplaneModel>>;
  abstract postAirplane(param: AirplaneModel): Observable<AirplaneModel>;
  abstract putAirplane(param: AirplaneModel): Observable<void>;
  abstract deleteAirplane(id: number): Observable<void>;
}
