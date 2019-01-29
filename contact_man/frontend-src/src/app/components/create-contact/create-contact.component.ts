import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Contact } from '../../entities';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  mobile_phone: string;
  home_phone: string;
  address: string;

  constructor(private authService: AuthService,
    private router: Router,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onCreateContactSubmit() {
    const newContact = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      mobile_phone: this.mobile_phone,
      home_phone: this.home_phone,
      address: this.address,
    }

    this.authService.createContact(newContact).subscribe((data) => {
      if (data.success) {
        this.authService.user = data.user;
        this.flashMessage.show("Contact created", { cssClass: 'alert-success' });
        this.router.navigate(['/contacts']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
        this.router.navigate(['/create-contact']);
      }
    });
  }
}
