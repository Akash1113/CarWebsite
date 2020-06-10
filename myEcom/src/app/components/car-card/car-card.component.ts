import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  providers:[CarService]
})
export class CarCardComponent implements OnInit {
  car: Array<Car>;
  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe(resCarData => this.car = resCarData);

  }
}
