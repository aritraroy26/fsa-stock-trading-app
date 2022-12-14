import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioData } from './types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  loadUserPortfolio(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>('/api/user-info');
  }

  loadStockHistory(): Observable<object> {
    return this.http
      .get<object>('/api/stock-history')
      .pipe(map((data: any) => data['Time Series (30min)']));
  }

  buyStock(numberOfShares: number): Observable<PortfolioData> {
    return this.http.post<PortfolioData>('/api/stocks/buy', { numberOfShares });
  }

  sellStock(numberOfShares: number): Observable<PortfolioData> {
    return this.http.post<PortfolioData>('/api/stocks/sell', {
      numberOfShares,
    });
  }
}
