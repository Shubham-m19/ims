import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
      this.userService.signup(this.signupForm.value).subscribe(response => {
        this.message = 'User registered successfully!';
        this.router.navigate(['/login']); // Redirect to login after signup
      }, error => {
        this.message = 'Error during signup!';
      });
    }
  }
}
