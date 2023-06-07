import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Vehicle} from "../../models";
import {FileService} from "../../services/file.service";
import {Router} from "@angular/router";
import carData from "../../vehicles.json";

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.scss']
})
export class RentedComponent {
  rented$: Observable<Vehicle[]>;
  car: Vehicle[] = carData;

  constructor(private fileService: FileService, private router: Router) {
    this.rented$ = this.fileService.getWishlist();
  }

  ngOnInit() {
  }


  getCar(id: number) {
    if (this.car) {
      this.car = this.car.filter((car) => car.id === id);
    }
  }

  isInRented(car: Vehicle) {
    return this.fileService.isInRented(car);
  }

  removeFromRented(car: Vehicle) {
    this.fileService.removeFromRented(car);
    alert("You have successfully removed the vehicle from the list");
  }
}
