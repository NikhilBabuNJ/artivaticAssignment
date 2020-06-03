import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getAllStates() {
    return this.http.get<any>('https://indian-cities-api-nocbegfhqg.now.sh/cities');
  }

}
