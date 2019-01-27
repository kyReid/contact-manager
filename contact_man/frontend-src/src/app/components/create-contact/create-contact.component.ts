import { Component, OnInit } from '@angular/core';

// Services
import { AuthService } from '../../services/auth.service';
import { Contact } from '../../entities';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  newContact: Contact = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onCreateContactSubmit() {
    if (!this.authService.user.contacts) {
      this.authService.user.contacts = [];
    }

    this.authService.user.contacts.push(this.newContact);
  }
}
