import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(private validateService: ValidateService,
              private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateRegisterFields(user)) {
      this.flashMessage.show("Please fill out all fields",  { cssClass: 'alert-danger' } );
      return false;
    }

    this.authService.registerUser(user).subscribe((data) => {
      if (data.success) {
        this.flashMessage.show("You are registered and can log in",  { cssClass: 'alert-success' } );
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg,  { cssClass: 'alert-danger' } );
        this.router.navigate(['/register']);
      }
    });
  }
}
