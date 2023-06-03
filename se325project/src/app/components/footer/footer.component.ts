import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import { SessionService } from 'src/app/services/session.service';
import { User } from 'src/app/models';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  user: User | undefined;

  constructor(private session: SessionService,private router: Router, private fileService: FileService) { }

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
