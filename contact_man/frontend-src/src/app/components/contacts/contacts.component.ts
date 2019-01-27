import { Component, OnInit } from '@angular/core';
import { User } from '../../entities';
import { MOCK_USER } from '../../mock_ent'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  mock_user: User = MOCK_USER;

  constructor() { }

  ngOnInit() {
  }

}
