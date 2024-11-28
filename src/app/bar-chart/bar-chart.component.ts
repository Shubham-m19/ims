import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScaleType } from '@swimlane/ngx-charts';

interface SeriesData {
  name: string;
  value: number;
}

interface YearData {
  name: string;
  series: SeriesData[];
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  multi: YearData[] = [];
  view: [number, number] = [700, 400]; // Chart size

  // Chart options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Expense (INR)';
  legendTitle: string = 'Schools';

  colorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFC107', '#20C997', '#6F42C1'],
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Fetch the sum of expenses year-wise school-wise from backend
    this.http.get<any[]>('http://localhost:8080/api/expenses/sumExpensesBySchoolYearwise').subscribe(
      (response) => {
        // Transform the backend data into the required format for ngx-charts
        const chartData: YearData[] = [];

        response.forEach((record) => {
          const year = record[0]; // Assuming the first column is year
          const school = record[1]; // Assuming the second column is school name
          const expense = record[2]; // Assuming the third column is sum of expenses

          // Find existing year data
          let yearData = chartData.find((data) => data.name === year);

          if (!yearData) {
            yearData = { name: year, series: [] };
            chartData.push(yearData);
          }

          yearData.series.push({ name: school, value: expense });
        });

        this.multi = chartData;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
