import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @Input() insights: any;
  public selectedDim1;
  public selectedDim2;
  public dim1Opts;
  public dim2Opts = [];
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
        ticks: {
            suggestedMin: 0
        }
    }
  };
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[] = [{data: [], label:''}];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  this.dim1Opts = Object.keys(this.insights);
  this.selectedDim1 = this.dim1Opts[0];
  this.getDim2Opts();
  this.selectedDim2 = this.dim2Opts[0];
  this.getChartData();
  }

  getDim2Opts(){
    let dim2Opts = [];
    let base1 = this.insights[this.selectedDim1];
    let opts1 = Object.keys(base1);
    opts1.forEach(opt1 => {
      let opts2 = Object.keys(base1[opt1]);
      opts2.forEach(opt2 => {
        if(!dim2Opts.length || !dim2Opts.includes(opt2)){
          dim2Opts.push(opt2);
        }
      })
    })
    this.dim2Opts = dim2Opts;
  }

  getChartData(){
    this.radarChartLabels = Object.keys(this.insights[this.selectedDim1]);
    let datum= [];
    this.radarChartLabels.forEach((data, index) => {
      let data1:any = this.insights[this.selectedDim1];
      let data2 = data1[String(data)];
      let data3 = data2[this.selectedDim2];
      datum.push(data3 && data3.delta ? data3.delta : 0);
    });
    this.radarChartData[0].data = datum;
    this.radarChartData[0].label = `${this.selectedDim1} - ${this.selectedDim2}`;
    console.log("Hi");
  }

}
