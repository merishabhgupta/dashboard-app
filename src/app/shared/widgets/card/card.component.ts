import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderwidth: 0,
          margin: [2, 2, 2, 2],
          heigth: 60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false,
      },
      exported: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTrick: false,
        tickOptions: [] 
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTrick: false,
        tickOptions: [] 
      },
      series: [{
        data: this.data
      }]
    };

    setTimeout(()=> {
      window.dispatchEvent(
          new Event('resize')
      );
        // Highcharts.resize();
      
    //   Highcharts.chart().reflow();
    }, 300);
    HC_exporting(this.Highcharts);
  }

}
