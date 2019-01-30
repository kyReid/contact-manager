import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User, Contact } from '../../entities';
import { MOCK_USER } from '../../mock_ent';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  mock_user: User = MOCK_USER;
  public contacts: Contact[];
  public searchText: string;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.authService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onDeleteContactSubmit(contact) {
    if (contact)
    {
      this.authService.deleteContact(contact._id).subscribe((data) => {
        if (data.success) {
          this.authService.user = data.user;
          this.contacts = this.authService.user.contacts;
          this.flashMessage.show("Contact deleted", { cssClass: 'alert-success' });
          this.router.navigate(['/contacts']);
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
        }
      });
    }
  }

}
