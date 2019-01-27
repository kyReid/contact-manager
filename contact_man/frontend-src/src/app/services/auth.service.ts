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
    let headers = new HttpHeaders();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post<Array<Contact>>('http://localhost:3000/users/contacts', { headers: headers });
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    interface RegisterResponse {
      success: boolean;
      msg: string;
    }

    return this.http.post<RegisterResponse>('http://localhost:3000/users/register', user, { headers: headers });
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

    return this.http.post<AuthenticationResponse>('http://localhost:3000/users/authenticate', user, { headers: headers });
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
