import { Injectable } from '@angular/core';
import {Car, User} from "../models";
import carData from 'src/app/cars.json'
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

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

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }

  addToWishlist(car: Car) {
    this.wishlist.push(car);
  }

  getWishlist(): Observable<Car[]> {
    return of(this.wishlist);
  }

  clearWishlist() {
    this.wishlist = [];
  }

  removeFromWishlist(car: Car) {
    this.wishlist = this.wishlist.filter((c) => c.id !== car.id);
  }

  isInWishlist(car: Car) {
    return this.wishlist.some((c) => c.id === car.id);
  }
}
