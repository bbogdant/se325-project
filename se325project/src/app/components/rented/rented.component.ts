import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../../models";
import {FileService} from "../../services/file.service";
import {Router} from "@angular/router";
import carData from "../../cars.json";

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.scss']
})
export class RentedComponent {
  rented$: Observable<Car[]>;

  constructor(private fileService: FileService, private router: Router) {
    this.rented$ = this.fileService.getWishlist();
  }

  ngOnInit() {
  }

  car: Car[] = carData;

  wishlist: Car[];

  getCar(id: number) {
    if (this.car) {
      this.car = this.car.filter((car) => car.id === id);
    }
  }

  isInWishlist(car: Car) {
    return this.fileService.isInWishlist(car);
  }

  removeFromWishlist(car: Car) {
    this.fileService.removeFromWishlist(car);
    alert("You have successfully removed the vehicle from the list");
  }
}
