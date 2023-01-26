import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs"
import {ICurrency, ICurrencyJson} from "./Currency"

@Injectable(
    {
        providedIn:'root'
    }
)
export class CurrencyService{
    private currencyUrl='/arz/?type=arz';
    private data:any = [];
    
    constructor(private http:HttpClient){}
    getCurrency():Observable<ICurrency[]>
    {
        return this.http.get<ICurrency[]>(this.currencyUrl);

    }

    getRecords()
    {
        return this.http.get(this.currencyUrl);


    }

    getData():ICurrency[]{
        //const url ='http://api.codebazan.ir/arz/?type=arz';
        this.http.get(this.currencyUrl).subscribe((res)=>{
          this.data = res
          console.log(this.data)
        });
       
       // result:ICurrencyJson=JSON.parse(this.data);
      //console.log(result);
      const temp=this.data;
       

        return this.data.Result;
      }

}