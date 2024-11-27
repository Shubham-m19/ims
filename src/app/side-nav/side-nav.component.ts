import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faDashboard, faFileAlt, faSignOutAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons';  // Added faKeyboard

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faFileAlt = faFileAlt;
  faSignOutAlt = faSignOutAlt;
  faKeyboard = faKeyboard;  // Added faKeyboard for Data Entry

  constructor(private router: Router) {}

  onLogout(): void {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      // Perform any logout logic here (e.g., clearing session data)
      this.router.navigate(['/login']);  // Route to login page
    }
  }
}
