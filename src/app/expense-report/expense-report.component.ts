import { Component } from '@angular/core';
import { ExpenseReport } from '../model/expense-report.model'; // Adjust the path as needed
// Adjust the path as necessary

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent {
  // Property to hold a list of expense reports
  reports: ExpenseReport[] = [];

  // Example method to add a report (this could be linked to a form in your template)
  addReport(report: ExpenseReport) {
    this.reports.push(report);
  }

  // Example method to retrieve reports (you can implement this to fetch data from your backend)
  getReports() {
    // Logic to retrieve reports, e.g., from a service
  }
}
