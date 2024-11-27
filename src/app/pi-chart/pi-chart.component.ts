import { Component } from '@angular/core';
import { LegendPosition, ScaleType, Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.css']
})
export class PiChartComponent {
  // JSON data for the pie chart
  dataFromApi: any[] = [
    {
      "school": "Z. P. School, Rewadi",
      "year": 2024,
      "expense": 40000
    },
    {
      "school": "Z. P. School, Rewadi",
      "year": 2023,
      "expense": 35000
    },
    {
      "school": "Z. P. School, Rewadi",
      "year": 2022,
      "expense": 30000
    },
    {
      "school": "Z. P. School, Rewadi",
      "year": 2021,
      "expense": 25000
    },
    {
      "school": "Z. P. School, Rewadi",
      "year": 2020,
      "expense": 20000
    },
    {
      "school": "Z. P. School, Rewadi",
      "year": 2019,
      "expense": 15000
    }
  ];

  // Transform the data from API into a format suitable for the pie chart
  single: any[] = this.dataFromApi.map(item => ({
    name: item.year.toString(),
    value: item.expense
  }));

  // View dimensions for the chart
  view: [number, number] = [700, 400];

  // Chart options
  gradient: boolean = false; // Disable gradient for the chart
  showLegend: boolean = true; // Show legend below the chart
  showLabels: boolean = true; // Show labels on the chart
  isDoughnut: boolean = false; // Set to true for a doughnut chart

  // Correct legend position using ngx-charts' LegendPosition type
  legendPosition: LegendPosition = LegendPosition.Below;

  // Generate dynamic color scheme based on the number of data items
  generateDynamicColors(numItems: number): string[] {
    const colors = ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF8042', '#FFBB28'];
    const generatedColors: string[] = [];
    
    for (let i = 0; i < numItems; i++) {
      // Use modulo to repeat colors if there are more items than colors
      generatedColors.push(colors[i % colors.length]);
    }

    return generatedColors;
  }

  // Dynamically generate the color scheme
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,  // Corrected to ScaleType.Ordinal
    domain: this.generateDynamicColors(this.dataFromApi.length)
  };

  // Event handlers for chart interactions
  onSelect(data: any): void {
    console.log('Item clicked', data);
  }

  onActivate(data: any): void {
    console.log('Activate', data);
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', data);
  }
}
