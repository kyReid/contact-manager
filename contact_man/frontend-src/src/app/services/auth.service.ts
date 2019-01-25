import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor (private http: HttpClient) { }

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
      user: {
        id: string;
        username: string;
      }
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
