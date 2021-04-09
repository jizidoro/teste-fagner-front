import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import * as Chart from 'chart.js';
import { isPlatformBrowser } from '@angular/common';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;

  fontawesome: any;

  icon = [
    ['fas', 'th'],
    ['fas', 'boxes'],
    ['fas', 'users'],
    ['fas', 'building'],
    ['fas', 'user-tie'],
    ['fas', 'user-plus'],
    ['fas', 'tags'],
    ['fas', 'house-user'],
    ['fas', 'cog'],
  ] as IconProp[];
  labels = [
    'Completa',
    'Produtos',
    'Clientes',
    'Convênios',
    'Conveniados',
    'Fidelidade',
    'Preços',
    'Funcionários',
    'Configuração',
  ];
  backgroundColor = [
    '#fab727',
    '#f48925',
    '#d0232a',
    '#9a1740',
    '#86266b',
    '#2674ae',
    '#2d86c8',
    '#4cb757',
    '#66d671',
  ];
  data = [10, 20, 30, 40, 50, 60, 70, 80, 90].sort((a, b) => b - a);
  total = this.data.reduce((pv, cv) => pv + cv, 0);

  chartData: any = {
    labels: this.labels,
    datasets: [
      {
        icon: this.icon,
        backgroundColor: this.backgroundColor,
        borderColor: 'transparent',
        data: this.data,
      },
    ],
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: this.chartData,

        // Configuration options go here
        options: {
          cutoutPercentage: 70,
          legend: {
            display: false,
          },
        },
      });
    }
  }

  getPercentageValue(value: any): string {
    return ((value / this.total) * 100).toFixed(0) + '%';
  }

  getTotalValue(): number {
    return this.total;
  }
}
