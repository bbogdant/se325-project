import { Injectable } from '@angular/core';
import {Car} from "../models";
import carData from 'src/app/cars.json'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  cars: Car[] = carData;
  users = 'db.json';

  private wishlist: Car[] = [];

  constructor(private http: HttpClient) { }

  getCar(id: number): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }
}
