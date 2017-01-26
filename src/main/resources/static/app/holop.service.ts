import { Injectable } from '@angular/core';
import { Holop } from './holop';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HolopService {
  constructor(
    private http: Http
  ) {  }

  private url = '/rest/holops';

  getAll(): Observable<Holop[]> {
    return this.http.get(this.url)
      .map(resp => resp.json() as Holop[]);
  }

  get(id: number): Observable<Holop> {
    return this.http.get(this.url + '/' + id)
      .map(resp => resp.json() as Holop);
  }

  save(holop: Holop): Observable<any> {
    return this.http.post(this.url + '/' + holop.id, holop)
      .map(resp => resp.json())
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id)
      .map(resp => resp.json())
  }
}
