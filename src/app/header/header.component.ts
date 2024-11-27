import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = ''; // Variable to store the user's name
  isBrowser: boolean = false; // Check if code is running in the browser

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Set the browser flag
    this.isBrowser = typeof window !== 'undefined';
    
    if (this.isBrowser) {
      this.fetchUser(); // Fetch the user only when running in the browser
    }
  }

  fetchUser(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>(`${environment.apiUrl}/api/users/me`, { headers })
      .subscribe(
        (response) => {
          this.name = response.name; // Assuming the API returns the user's name
        },
        (error) => {
          console.error('Error fetching user data', error);
        }
      );
  }
}
