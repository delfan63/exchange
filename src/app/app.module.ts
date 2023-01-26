import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { Page1Component } from './page1/page1.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { ChartComponent } from './chart/chart.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgChartsModule  } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Page1Component,
    CurrenciesComponent,
    HomeComponent,
    ChartComponent
         ],
  imports: [
    SwiperModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot([
      {path:'currencies',component:CurrenciesComponent},
      {path:'home',component:HomeComponent},
      {path:'chart',component:ChartComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
