import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType  } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ViewChild } from '@angular/core'
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { CurrencyService } from '../currencies/currency.service';
import {ICurrency, ICurrencyJson} from "../currencies/Currency";
import {Observable} from "rxjs";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  currencies:ICurrency[]=[];
  currenciesObject:any;
  constructor(private currencyService:CurrencyService) {
    
  }
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Series A' }
      
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }
/*
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
  */
  ngOnInit(): void {
    this.currencyService.getRecords().subscribe(res=>{this.currenciesObject=res;
      this.currencies=this.currenciesObject.Result; 
      console.log(this.currencies);
      for(var currency of this.currencies)
      {
        this.barChartData.labels?.push(currency.name);
        this.barChartData.datasets[0].data.push(Number(currency.price.replace(/[^0-9.-]+/g,"")));
      }
      this.chart?.update();


    })
    

   
    
    

  }

}
