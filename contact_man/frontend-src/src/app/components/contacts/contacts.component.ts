import { Component, OnInit } from '@angular/core';
import { User, Contact } from '../../entities';
import { MOCK_USER } from '../../mock_ent';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  mock_user: User = MOCK_USER;
  public contacts: Contact[];
  public searchText: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
