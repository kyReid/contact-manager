import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegisterFields (user) {
    return !(user.username == undefined || user.password == undefined);
  }

  validateLoginFields (user) {
    return !(user.username == undefined || user.password == undefined);
  }
}
