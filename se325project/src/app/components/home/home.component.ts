import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import vehicleData from 'src/app/vehicles.json'
import {FileService} from 'src/app/services/file.service';
import {SessionService} from 'src/app/services/session.service';
import {Vehicle} from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filters: { [key: string]: boolean } = {};
  filteredVehicle: Vehicle[] = vehicleData;
  minPrice: number = 0;
  maxPrice: number = 0;
  selectField = false;
  rented: Vehicle[] = [];

  constructor(
    private router: Router,
    private session: SessionService,
    private fileService: FileService) {
  }

  ngOnInit(): void {
  }

  openVehicleDetails(id: number): void {
    this.router.navigate(['/details', id])
  }

  addToRented(id: number): void {
    if (this.session.getIsLoggedIn()) {
      const vehicle = this.fileService.getVehicle(id);
      if (vehicle) {
        this.fileService.addToRented(vehicle);
        alert("You successfully added vehicle to wishlist!")
      } else {
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  item(item: any) {
    throw new Error('Method not implemented.');
  }

  sortVehicles(sortBy: 'year' | 'price' | '') {
    this.filteredVehicle.sort((a, b) => {
      if (sortBy === 'year') {
        return a.year - b.year;
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else {
        return a.id - b.id;
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


  filterVehicleByFuel(value: string) {
    if (value === '') {
      this.filteredVehicle = vehicleData;
    } else {
      this.filteredVehicle = this.filteredVehicle.filter((vehicle) => vehicle.fuel.includes(value));
    }
  }

  filterVehicleByTransmission(value: string) {
    if (value === '') {
      this.filteredVehicle = vehicleData;
    } else {
      this.filteredVehicle = this.filteredVehicle.filter((vehicle) => vehicle.transmission.includes(value));
    }
  }

  filterByPrice(minPrice: number, maxPrice: number) {
    this.filteredVehicle = this.filteredVehicle.filter((vehicle) => vehicle.price >= parseInt(String(minPrice)) && vehicle.price <= parseInt(String(maxPrice)));
  }

  searchVehicles(make: string) {
    if (make === '') {
      this.filteredVehicle = vehicleData;
    } else {
      this.filteredVehicle = this.filteredVehicle.filter((vehicle) => vehicle.make.toUpperCase().includes(make.toUpperCase()));
    }
  }

  resetVehicles() {
    this.minPrice = 0;
    this.maxPrice = 0;
    this.filteredVehicle = vehicleData;
  }
}


