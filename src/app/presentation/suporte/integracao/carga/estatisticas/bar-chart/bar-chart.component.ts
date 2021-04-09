import { Chart } from 'chart.js';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { barChartData } from './bar-chart.data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
          responsive: true,
          scales: {
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  color: '#F7F7F7',
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  color: '#F7F7F7',
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
        },
      });
    }
  }
}
