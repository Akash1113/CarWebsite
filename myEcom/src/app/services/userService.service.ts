import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Response } from '@angular/http';
@Injectable()
export class UserServiceService {
  _getUserUrl = 'http://localhost:3000/api/users'
  constructor(private _http: Http) {
   }
   getUsers(){
    return this._http.get(this._getUserUrl)
    .map((response: Response) => response.json())
   }
}
