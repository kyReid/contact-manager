import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage('You are logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });

    this.router.navigate(['/login']);
    return false;
  }

}
