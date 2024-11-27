import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { map } from 'rxjs/operators';
import { ExpenseReport } from '../model/expense-report.model'; 
import { Observable, of } from 'rxjs'; // Import Observable and 'of'

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {
  // Filters
  yearFilter: string = '';
  headFilter: string = '';
  schoolFilter: string = '';

  // Static options for filters
  years = [2020, 2021, 2022, 2023, 2024];
  heads = ['Dr. Anjali Mehta', 'Mr. Rajesh Sharma', 'Ms. Priya Kapoor'];
  schools = ['Greenwood High', 'Lakeside Academy', 'Riverside International School'];

  // Data
  reports$: Observable<ExpenseReport[]> = of([]); // All reports
  filteredReports$: Observable<ExpenseReport[]> = of([]); // Filtered reports
  paginatedReports: ExpenseReport[] = []; // Reports for the current page

  // Pagination variables
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  // Fetch all reports from the service
  fetchReports(): void {
    this.reports$ = this.reportService.getExpenseReports();
    this.applyFilters(); // Apply filters as soon as data is fetched
  }

  // Apply filters to the data
  applyFilters(): void {
    this.filteredReports$ = this.reports$.pipe(
      map((reports: ExpenseReport[]) =>
        reports.filter(report =>
          (this.yearFilter ? +report.reportYear === +this.yearFilter : true) &&
          (this.headFilter ? report.head === this.headFilter : true) &&
          (this.schoolFilter ? report.school === this.schoolFilter : true)
        )
      )
    );
    this.paginateReports(); // Apply pagination after filtering
  }

  // Paginate the filtered reports
  paginateReports(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.filteredReports$.subscribe((reports: ExpenseReport[]) => {
      this.paginatedReports = reports.slice(startIndex, endIndex);
    });
  }

  // Navigate to the next page
  nextPage(): void {
    this.currentPage++;
    this.paginateReports();
  }

  // Navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateReports();
    }
  }
}
