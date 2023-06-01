import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { RentedComponent } from './components/rented/rented.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'rentals', component: RentedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
