import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { User } from '../user';


@Injectable()
export class UserServiceService {


  _getUserUrl = 'http://localhost:3000/api/users'
  _getUserById = 'http://localhost:3000/api/user/'
  _putUser = 'http://localhost:3000/api/user/'
  constructor(private _http: Http) {
   }
   getUsers(){
    return this._http.get(this._getUserUrl)
    .map((response: Response) => response.json())
   }
   getOneUser(){
    return this._http
      .get(this._getUserById + JSON.parse(localStorage.getItem("token")).subject)
      .map((response: Response) => response.json());
  }
  editUser(user: User) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .put(this._putUser + user._id, JSON.stringify(user), options)
      .map((response: Response) => response.json()
    );
  }
}
