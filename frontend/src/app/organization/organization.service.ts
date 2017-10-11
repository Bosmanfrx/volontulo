import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/publishLast'

import { environment } from '../../environments/environment';

@Injectable()
export class OrganizationService {
  url = `${environment.apiRoot}/organizations`;
  requestOptions = { withCredentials: true };

  public organizations$ = this.http.get(this.url, this.requestOptions)
      .map((resp) => resp.json()).publishLast().refCount();

  constructor(private http: Http) {
  }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, this.requestOptions)
      .map((resp) => resp.json());
  }
}
