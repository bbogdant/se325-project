import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FileService} from '../../services/file.service';
import {SessionService} from '../../services/session.service';
import {User} from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private session: SessionService, private router: Router, private fileService: FileService) {
  }

  ngOnInit(): void {
  }


  isLoggedIn() {
    if (this.session.getIsLoggedIn()) {
      this.user = this.session.user;
      return true;
    }
    return false;
  }

  logout() {
    this.session.logout();
    this.fileService.clearWishlist();
    this.router.navigate(['/login']);
  }
}
