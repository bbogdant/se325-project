import {Injectable} from '@angular/core';
import {Vehicle} from "../models";
import carData from 'src/app/vehicles.json'
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  cars: Vehicle[] = carData;

  private rented: Vehicle[] = [];

  constructor() {
  }

  findCar(id: number) {
    return this.cars.find((car) => car.id === id);
  }

  getVehicle(id: number): Vehicle | undefined {
    return this.cars.find((car) => car.id === id);
  }

  addToRented(car: Vehicle) {
    this.rented.push(car);
  }

  getWishlist(): Observable<Vehicle[]> {
    return of(this.rented);
  }

  clearWishlist() {
    this.rented = [];
  }

  removeFromRented(car: Vehicle) {
    this.rented = this.rented.filter((c) => c.id !== car.id);
  }

  isInRented(car: Vehicle) {
    return this.rented.some((c) => c.id === car.id);
  }
}
