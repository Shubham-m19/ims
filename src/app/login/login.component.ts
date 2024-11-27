import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    // Initialize the login form with form controls and validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required] // Role control added
    });
  }

  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value; // Destructure form values

      // Call the login method from UserService
      this.userService.loginWithRole(email, password, role).subscribe(response => {
        if (response && response.role === 'PO') {
          // If role is PO, redirect to PO dashboard
          this.router.navigate(['/po-dashboard']);
        } else if (response && response.role === 'clerk') {
          // If role is Clerk, redirect to Clerk dashboard
          this.router.navigate(['/data-input']);
        } else {
          // Invalid credentials
          this.errorMessage = 'Invalid login credentials';
        }
      }, error => {
        // Handle error during login
        this.errorMessage = 'Error during login';
      });
    }
  }
}
