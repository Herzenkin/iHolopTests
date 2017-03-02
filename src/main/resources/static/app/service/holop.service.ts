import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Holop } from './holop';

@Injectable()
export class HolopService {
  constructor(
    private http: Http
  ) {  }

  private url: string = '/rest/holops';

  getAll(): Observable<Holop[]> {
    return this.http.get(this.url)
      .map(resp => resp.json() as Holop[]);
  }

  get(id: number): Observable<Holop> {
    return this.http.get(this.url + '/' + id)
      .map(resp => resp.json() as Holop);
  }

  save(holop: Holop): Observable<Holop> {
    return this.http.post(this.url + '/' + holop.id, holop)
      .map(resp => resp.json() as Holop)
  }

  delete(id: number): Observable<number> {
    return this.http.delete(this.url + '/' + id)
      .map(resp => resp.json() as number)
  }
}
