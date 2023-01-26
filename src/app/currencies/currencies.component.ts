import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import {ICurrency} from "./Currency";
import {Observable} from "rxjs";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})

export class CurrenciesComponent implements OnInit {
  currencies:ICurrency[]=[];
//currencyArray : string[] = [];
   currenciesObject:any;
   title = 'ngrx';
   showSpinner = true;
   //currenciesJason:any;

//private _currencyService;
/*  
currencies= [
    {
        name: "دلار",
        price: "405,140",
        change: "(0%) 0",
        percent: 0,
        low: "403,800",
        High: "406,000",
        update: "۲۲ دی"
    },
          {
              name: "یورو",
              price: "442,850",
              change: "(0%) 0",
              percent: 0,
              low: "440,290",
              High: "443,350",
              update: "۲۲ دی"
          },
          {
              name: "درهم امارات ",
              price: "111,710",
              change: "(0%) 0",
              percent: 0,
              low: "111,310",
              High: "111,920",
              update: "۲۲ دی"
          },
          {
              name: "پوند انگلیس",
              price: "500,670",
              change: "(0%) 0",
              percent: 0,
              low: "498,160",
              High: "502,260",
              update: "۲۲ دی"
          }
    
  ]
  */
  constructor(private currencyService:CurrencyService) {
    
   }

  ngOnInit(): void {
    /*
    this.currencyService.getCurrency().subscribe({
      next:currencies=>this.currencies=currencies
    });
    */
   /*
    this.currencyService.getRecords().subscribe(
      currenciesObject=>this.currenciesObject=currenciesObject
    );

    console.log(this.currenciesJason);
    */  
   
    //this.currenciesObject=JSON.parse(this.currenciesJason);
    //console.log("data is:"+this.currenciesObject.Result);
    //this.currencies=this.currencyService.getData();
   // console.log(this.currenciesJason);
   this.currencyService.getRecords().subscribe(res=>{this.currenciesObject=res;
    //console.log(this.currenciesObject);
    this.currencies=this.currenciesObject.Result;
    this.showSpinner = false;
    

  })
  
  }
}
