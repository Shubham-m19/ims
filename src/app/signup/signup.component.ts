import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)]], // Updated validation
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value).subscribe(
        response => {
          // SweetAlert2 for success
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'User registered successfully!',
            confirmButtonText: 'OK'
          }).then(() => {
            this.router.navigate(['/login']); // Redirect to login after the alert
          });
        },
        error => {
          // SweetAlert2 for error
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Error during signup!',
            confirmButtonText: 'OK'
          });
        }
      );
    } else {
      // SweetAlert2 for invalid form
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fill out all required fields correctly.',
        confirmButtonText: 'OK'
      });
    }
  }
}
