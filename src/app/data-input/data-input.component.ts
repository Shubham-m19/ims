import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {
  dataForm: FormGroup;
  years = [2020, 2021, 2022, 2023,2024];
  heads = ['Dr. Anjali Mehta', 'Mr. Rajesh Sharma', 'Ms. Priya Kapoor'];
  schools = ['Greenwood High', 'Lakeside Academy', 'Riverside International School'];
  private apiUrl = 'http://localhost:8080/api/expenses/add'; // Backend API endpoint
  successMessage: string = ''; // To hold the success message

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize form with FormBuilder
    this.dataForm = this.fb.group({
      reportYear: ['', Validators.required], // Updated to match the backend
      head: ['', Validators.required],
      school: ['', Validators.required],
      expenseDesc: this.fb.array([this.createExpense()]) // Initialize with one expense field
    });
  }

  // Getter for expenses form array
  get expenseDesc(): FormArray {
    return this.dataForm.get('expenseDesc') as FormArray;
  }

  // Create a new expense form group
  createExpense(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required], // Renamed for clarity
      amount: [null, [Validators.required, Validators.min(0)]]
    });
  }

  // Add a new expense field
  addExpenseField() {
    this.expenseDesc.push(this.createExpense());
  }

  // Remove the last expense field
  removeExpenseField(index: number) {
    if (this.expenseDesc.length > 1) {
      this.expenseDesc.removeAt(index);
    }
  }

  // Submit the form data
  onSubmit() {
    if (this.dataForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    const expenses: string[] = [];
    let totalAmount = 0;

    this.expenseDesc.controls.forEach(expense => {
      expenses.push(`${expense.get('description')?.value}`); // Get expense description
      totalAmount += expense.get('amount')?.value; // Sum the amounts
    });

    // Prepare final form data
    const formData = {
      reportYear: this.dataForm.value.reportYear,
      head: this.dataForm.value.head,
      school: this.dataForm.value.school,
      expenseDesc: expenses.join(', '), // Join descriptions as a string
      amount: totalAmount,
      date: new Date() // Add date if needed, set as current date
    };

    console.log('Form Data:', formData);

    this.http.post(this.apiUrl, formData).subscribe(
      response => {
        console.log('Data submitted successfully:', response);
        this.successMessage = 'Data stored successfully!';
        // Optionally reset the form or provide feedback
        setTimeout(() => {
          this.successMessage = ''; // Clear the success message
          this.dataForm.reset(); // Reset the form after success
          this.expenseDesc.clear(); // Clear expenses after reset
          this.expenseDesc.push(this.createExpense()); // Re-add the initial expense field
        }, 2000);
      },
      error => {
        console.error('Error submitting data:', error);
      }
    );
  }
}
