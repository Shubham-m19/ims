import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseReport } from './model/expense-report.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8080/api/expenses/all'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Method to get all expense reports
  getExpenseReports(): Observable<ExpenseReport[]> {
    return this.http.get<ExpenseReport[]>(this.apiUrl);
  }

  // Methods to get filter data
  getYears(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/years`);
  }

  getHeads(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/heads`);
  }

  getSchools(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/schools`);
  }
  getExpenseDesc(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/expenseDesc`);
  }
}
