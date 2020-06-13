import { Component, OnInit, EventEmitter } from '@angular/core';
import { Car} from 'src/app/car';
import { CarService } from 'src/app/services/car.service';




@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  inputs:['car'],
  outputs:['updateCarEvent'],
  providers:[CarService]
})


export class CarCardComponent implements OnInit {
  private updateCarEvent = new EventEmitter();
  car: Array<Car>;
  cars: any
  constructor(private _carService: CarService
    ) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe(resCarData => this.car = resCarData);

  }
  updateCar(car: any){
    this.updateCarEvent.emit(this.cars)
  }

  onUpdateCar(car: any){
    this._carService.ediCar(car)
    .subscribe(resEditCar => car = resEditCar);
  }

  deleteCar(car: any){
    let carArray = this.car;
    this._carService.deleteCar(car)
    .subscribe(resDeleteCar => {
      for(let i=0; i < carArray.length; i++){
        if(carArray[i]._id === car._id){
          carArray.splice(i,1);
        }
      }

    });
  }


}
