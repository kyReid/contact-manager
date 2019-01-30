import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'contacts',
})
export class ContactsPipe implements PipeTransform {
  transform(contacts: any, searchText: any): any {
    if(searchText == null) return contacts;

    // this is currently gross but some of these fields may be undefined
    return contacts.filter(function(contact){
      let filter: boolean = false;
      if (contact.firstname)
        filter = filter || contact.firstname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      if (contact.lastname)
        filter = filter || contact.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      if (contact.email)
        filter = filter || contact.email.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      if (contact.mobile_phone)
        filter = filter || contact.mobile_phone.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      if (contact.home_phone)
        filter = filter || contact.home_phone.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      if (contact.address)
        filter = filter || contact.address.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      return filter;
    });
  }
}
