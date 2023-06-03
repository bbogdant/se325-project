import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import carData from 'src/app/cars.json'
import { FileService } from 'src/app/services/file.service';
import { SessionService } from 'src/app/services/session.service';
import { Car } from 'src/app/models';


exportAs: 'filteredCars'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  marka: string;
  podaci: any[];
  filters: { [key: string]: boolean } = {};
  filteredCars: Car[] = carData;
  minPrice: number = 0;
  maxPrice: number = 0;
  selectField = false;


  constructor(
    private router: Router,
    private session: SessionService,
    private fileService: FileService) { }


    ngOnInit(): void {
    }

    wishlist: Car[] = [];
  
  
    openCarDetails(id: number): void{
      this.router.navigate(['/details', id])
    }

    addToWishList(id: number): void {
      if (this.session.getIsLoggedIn()) {
        const car = this.fileService.getCar(id);
        if (car) {
          this.fileService.addToWishlist(car);
          alert("You successfully added car to wishlist!")
        } else {
        }
      } else {
        this.router.navigate(['/login']);
      }
    }
  item(item: any) {
    throw new Error('Method not implemented.');
  }


  sortCars(sortBy: 'year' | 'price') {
    this.filteredCars.sort((a, b) => {
      if (sortBy === 'year') {
        return a.year - b.year;
      } 
      else {
        return a.price - b.price;
      }
    });
  }


  onFilterChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const checked = target.checked;
  
    
    if (checked) {
      this.filters[name] = true;
    } else {
      delete this.filters[name];
    }
  }
  

  filterCarByFuel(value: string){
    if (value === '') {
      this.filteredCars = carData;
    } else {
      this.filteredCars = this.filteredCars.filter((car) => car.fuel.includes(value));    
    }
  }

  filterCarByTransmission(value: string){
    if (value === '') {
    this.filteredCars = carData;
    } else {
      this.filteredCars = this.filteredCars.filter((car) => car.transmission.includes(value));    
    }
  }


  // filterByPrice(minPrice: number, maxPrice: number): void {
  //   this.filteredCars = this.car.filter(car => car.price >= minPrice && car.price <= maxPrice);
  // }

  filterByPrice(minPrice: number, maxPrice: number){
    this.filteredCars = this.filteredCars.filter((car) => car.price >= minPrice && car.price <= maxPrice);
  }


  searchCars(make: string) {
    this.filteredCars = this.filteredCars.filter((car) => car.make.toUpperCase().includes(make));
  }

  // resetCars() {
  //   this.filteredCars = carData;
  // }
}


