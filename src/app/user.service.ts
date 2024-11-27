import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/User'; // Your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  // Sign up a new user
  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-user`, user);
  }

  // Login with email and password
  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/login/${email}/${password}`);
  }

  // Login with role
  loginWithRole(email: string, password: string, role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/login/${email}/${password}/${role}`);
  }
}
