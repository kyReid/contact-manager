import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router,
              private authService: AuthService,
              private validateService: ValidateService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateLoginFields(user)) {
      this.flashMessage.show("Please fill out all fields",  { cssClass: 'alert-danger' } );
      return false;
    }

    this.authService.authenticateUser(user).subscribe((data) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show("You are logged in",  { cssClass: 'alert-success' } );
        this.router.navigate(['/contacts']);
      } else {
        this.flashMessage.show(data.msg,  { cssClass: 'alert-danger' } );
        this.router.navigate(['/login']);
      }
    });

  }
}
