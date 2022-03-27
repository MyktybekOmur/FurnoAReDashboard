import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chartotions: any;
  constructor() { }

  ngOnInit(): void {
    this.chartLine();
  }
  chartLine(){
    this.chartotions = {
      series: [
        {
          name: 'Satış',
          data: [10, 15, 20, 15, 30, 20, 10, 20, 25],
          color: '#FEB019',
         
        },
      ],
      stroke: {
        curve: 'smooth',
      },
      markers: {
        size: 2,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
    },
      chart: {
        height: 300,
        width: '100%',
        type: 'line',
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          autoSelected: 'zoom',
        },
      },

      dataLabels: {
        enabled: false,
      },
      yaxis: {
        min: 5,
        max: 30,
        tickAmount: 6,
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
}
