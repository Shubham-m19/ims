import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpenseReportService } from '../expense.service'; // Update path as necessary

@Component({
  selector: 'app-clerk-dashboard',
  templateUrl: './clerk-dashboard.component.html',
  styleUrls: ['./clerk-dashboard.component.css']
})
export class ClerkDashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  headWiseExpenses: any[] = [];
  schoolWiseExpenses: any[] = [];
  yearWiseSchoolExpenses: any[] = [];
  sumExpensesBySchoolYearwise: any[] = [];
  
  years: number[] = []; // Array to hold years

  constructor(
    private fb: FormBuilder,
    private expenseReportService: ExpenseReportService
  ) {
    this.dashboardForm = this.fb.group({
      year: ['']
    });
  }

  ngOnInit(): void {
    // Initialize the years array from 2021 to 2024
    this.years = [2021, 2022, 2023, 2024];
  }

  onSubmit(): void {
    const year = this.dashboardForm.get('year')?.value;
    if (year) { // Check if year is provided
      this.getHeadWiseExpenses(year);
      this.getSchoolWiseExpenses(year);
      this.getYearWiseSchoolExpenses(); // Call this method to fetch data
      this.getSumExpensesBySchoolYearwise(year); // Fetch sum expenses by school for the selected year
    }
  }

  getHeadWiseExpenses(year: number): void {
    this.expenseReportService.getHeadWiseExpenses(year).subscribe(
      (data) => {
        this.headWiseExpenses = data;
      },
      (error) => {
        console.error('Error fetching head-wise expenses', error);
      }
    );
  }

  getSchoolWiseExpenses(year: number): void {
    this.expenseReportService.getSchoolWiseExpenses(year).subscribe(
      (data) => {
        this.schoolWiseExpenses = data;
      },
      (error) => {
        console.error('Error fetching school-wise expenses', error);
      }
    );
  }

  getYearWiseSchoolExpenses(): void {
    this.expenseReportService.getYearWiseSchoolExpenses().subscribe(
      (data) => {
        this.yearWiseSchoolExpenses = data;
      },
      (error) => {
        console.error('Error fetching year-wise school expenses', error);
      }
    );
  }

  // New function to fetch sum of expenses by school for the selected year
  getSumExpensesBySchoolYearwise(year: number): void {
    this.expenseReportService.getSumExpensesBySchoolYearwise(year).subscribe(
      (data) => {
        this.sumExpensesBySchoolYearwise = data;
      },
      (error) => {
        console.error('Error fetching sum expenses by school year-wise', error);
      }
    );
  }
}
