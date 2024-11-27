import { Component } from '@angular/core';
import { faDashboard, faFileAlt, faSignOutAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-po-side-nav',
  templateUrl: './po-side-nav.component.html',
  styleUrls: ['./po-side-nav.component.css']
})
export class PoSideNavComponent {
  // Icon declarations
  faDashboard = faDashboard;
  faFileAlt = faFileAlt;
  faSignOutAlt = faSignOutAlt;
  faKeyboard = faKeyboard;  // Added faKeyboard for Data Entry
  onDataEntryClick() {// Debugging message
    alert('The PO is not allowed to enter data.');  // Alert
  }

  constructor(private router: Router) {}

  onLogout(): void {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      // Perform any logout logic here (e.g., clearing session data)
      this.router.navigate(['/login']);  // Route to login page
    }
  }
}

  



