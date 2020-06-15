import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
    @Input() data = [];
  chartOptions: {};
  Highcharts= Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          reflow: true,
      },
      title: {
          text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
          text: 'Demo'
      },
      xAxis: {
          categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
        enabled: false,
      },
      exported: {
        enabled: true,
      },
      series: this.data
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
