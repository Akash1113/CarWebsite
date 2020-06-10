import { TestBed } from "@angular/core/testing";
import { Http } from "@angular/http";
import { HttpModule } from '@angular/http';
import { CarService } from "./car.service";

describe("CarService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [Http, HttpModule]
  }));

  it("should be created", () => {
    const service: CarService = TestBed.get(CarService);
    expect(service).toBeTruthy();
  });
});
