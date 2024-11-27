import { Component, OnInit } from '@angular/core';
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
  multi: YearData[] = [
    {
      "name": "2020",
      "series": [
        { "name": "Z. P. School, Rewadi", "value": 40000 },
        { "name": "School B", "value": 45000 },
        { "name": "School C", "value": 50000 }
      ]
    },
    {
      "name": "2021",
      "series": [
        { "name": "Z. P. School, Rewadi", "value": 25000 },
        { "name": "School B", "value": 29000 },
        { "name": "School C", "value": 33000 }
      ]
    },
    {
      "name": "2022",
      "series": [
        { "name": "Z. P. School, Rewadi", "value": 30000 },
        { "name": "School B", "value": 34000 },
        { "name": "School C", "value": 38000 }
      ]
    },
    {
      "name": "2023",
      "series": [
        { "name": "Z. P. School, Rewadi", "value": 35000 },
        { "name": "School B", "value": 38000 },
        { "name": "School C", "value": 42000 }
      ]
    },
    {
      "name": "2024",
      "series": [
        { "name": "Z. P. School, Rewadi", "value": 40000 },
        { "name": "School B", "value": 45000 },
        { "name": "School C", "value": 50000 }
      ]
    }
  ];

  flattenedData: YearData[] = []; // Store flattened data

  view: [number, number] = [700, 400];  // Chart size

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
    group: ScaleType.Ordinal, // Corrected ScaleType value
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'] // Colors for each school
  };

  ngOnInit() {
    // Calculate flattened data during initialization
    this.flattenData();
  }

  flattenData() {
    this.flattenedData = this.multi.map(yearData => ({
      name: yearData.name,
      series: yearData.series.map(schoolData => ({
        name: schoolData.name,
        value: schoolData.value
      }))
    }));
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
