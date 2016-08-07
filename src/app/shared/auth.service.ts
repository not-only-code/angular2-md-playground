import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private logged: boolean = false;
  private url: string = 'http://private-70438-angular2mdplayground.apiary-mock.com';

  constructor(private http: Http) {}

  isLoggedIn (): boolean {
    return this.logged;
  }

  login (params: Object): any {
    return this.http.post(this.url+'/login', params)
      .toPromise()
      .then((res)=>{
        return this.logged = true;
      });
  }
}
