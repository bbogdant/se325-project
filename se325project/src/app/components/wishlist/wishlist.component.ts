import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import carData from 'src/app/cars.json'
import { FileService } from 'src/app/services/file.service';
import { Car } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist$: Observable<Car[]>;

  constructor(private fileService: FileService, private router: Router) {
    this.wishlist$ = this.fileService.getWishlist();
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
