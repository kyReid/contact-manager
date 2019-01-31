import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { User, Contact } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: User;

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    if (localStorage.id_token == undefined)
      return false;
    return !jwtHelper.isTokenExpired(localStorage.id_token);
  }

  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('id_token');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getContacts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    // CHANGE IP ADDRESS TO LOCALHOST WHEN DEVELOPING LOCALLY
    return this.http.get<Contact[]>('/users/contacts', { headers: headers });
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    interface RegisterResponse {
      success: boolean;
      msg: string;
    }
    // CHANGE IP ADDRESS TO LOCALHOST WHEN DEVELOPING LOCALLY
    return this.http.post<RegisterResponse>('/users/register', user, { headers: headers });
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    interface AuthenticationResponse {
      success: boolean;
      msg: string;
      token: string;
      user: User;
    }
    // CHANGE IP ADDRESS TO LOCALHOST WHEN DEVELOPING LOCALLY
    return this.http.post<AuthenticationResponse>('/users/authenticate', user, { headers: headers });
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  createContact(newContact) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    interface CreateContactResponse {
      success: boolean;
      msg?: string;
      user?: User;
    }
    // CHANGE IP ADDRESS TO LOCALHOST WHEN DEVELOPING LOCALLY
    return this.http.put<CreateContactResponse>('/users/contacts/create', newContact, { headers: headers });
  }

  deleteContact(contact) {

    interface DeleteContactResponse {
      success: boolean;
      msg?: string;
      user?: User;
    }
    // CHANGE IP ADDRESS TO LOCALHOST WHEN DEVELOPING LOCALLY
    return this.http.delete<DeleteContactResponse>('/users/contacts/delete/' + contact, { headers: { 'Content-Type': 'application/json', 'Authorization': this.authToken } });
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
