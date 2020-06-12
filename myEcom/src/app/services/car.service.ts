import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Car } from "../car";

@Injectable()
export class CarService {
  private _getUrl = "http://localhost:3000/api/cars";
  private _postUrl = "http://localhost:3000/api/car";
  private _delUrl = "http://localhost:3000/api/cars/";
  private _putUrl = "http://localhost:3000/api/car/";
  constructor(private _http: Http) {}

  getCars() {
    return this._http
      .get(this._getUrl)
      .map((response: Response) => response.json());
  }
  addCar(cars: Car) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .post(this._postUrl, JSON.stringify(cars), options)
      .map((response: Response) => response.json());
  }

  ediCar(car: Car) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this._http
      .put(this._putUrl + car._id, JSON.stringify(car), options)
      .map((response: Response) => response.json());
  }

  deleteCar(car: Car) {
    return this._http
      .delete(this._delUrl + car._id)
      .map((response: Response) => response.json());
  }
}
