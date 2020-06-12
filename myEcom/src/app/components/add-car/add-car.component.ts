import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import {CarService} from '../../services/car.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
  providers: [CarService]
})
export class AddCarComponent implements OnInit {
  car: Array<Car> = [];


  constructor(private _carService: CarService,
   private _router: Router) { }

  ngOnInit() {
  }
  onSubmitAddCar(car: Car){
    this._carService.addCar(car)
    .subscribe(resNewCar => {
      this.car.push(resNewCar);
      this._router.navigate(["/homepage"]);
    })
  }

}
