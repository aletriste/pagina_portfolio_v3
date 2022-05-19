import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces';
import { PORTFOLIOS } from '../data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl ="http://localhost:5001/portfolio"
  constructor(private http:HttpClient) { }
  
  getPortfolio():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.apiUrl)
  };
  addPortfolio(portfolio:Portfolio):Observable<Portfolio>{
    return this.http.post<Portfolio>(this.apiUrl, portfolio, httpOptions)
  }
  
}
