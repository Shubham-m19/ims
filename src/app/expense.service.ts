import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseReport } from '../app/model/expense-report.model'; // Update path as necessary

@Injectable({
  providedIn: 'root'
})
export class ExpenseReportService {
  private baseUrl = 'http://localhost:8080/api/expenses'; // Update base URL as necessary

  constructor(private http: HttpClient) { }

  getHeadWiseExpenses(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/headwise?year=${year}`);
  }

  getSchoolWiseExpenses(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/schoolwise?year=${year}`);
  }

  getYearWiseSchoolExpenses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sumExpensesBySchoolAndYear`);
  }

  getSumExpensesBySchoolYearwise(year: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sumExpensesBySchoolYearwise`);
  }
}
