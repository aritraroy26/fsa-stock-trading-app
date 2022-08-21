import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import * as PlotlyJs from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJs;

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    NavBarComponent,
    DashboardPageComponent,
    StockChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PlotlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
