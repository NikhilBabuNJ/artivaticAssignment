import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from '../../../environments/environment';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getAllStates() {
    return this.http.get<City>(`${environment.baseUrl}/cities`);
  }

}
