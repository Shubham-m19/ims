import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

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
      this.userService.loginWithRole(email, password, role).subscribe(
        response => {
          if (response && response.role === 'PO') {
            // Success alert for PO
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome to the PO Dashboard!',
              confirmButtonText: 'Proceed'
            }).then(() => {
              this.router.navigate(['/po-dashboard']); // Redirect to PO dashboard
            });
          } else if (response && response.role === 'clerk') {
            // Success alert for Clerk
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome to the Clerk Dashboard!',
              confirmButtonText: 'Proceed'
            }).then(() => {
              this.router.navigate(['/data-input']); // Redirect to Clerk dashboard
            });
          } else {
            // Error alert for invalid credentials
            Swal.fire({
              icon: 'error',
              title: 'Invalid Credentials',
              text: 'Please check your email, password, or role.',
              confirmButtonText: 'Retry'
            });
          }
        },
        error => {
          // Error alert for login failure
          Swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'An error occurred during login. Please try again later.',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }
}
