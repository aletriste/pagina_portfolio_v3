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
  private apiUrl ="http://localhost:8080/portfolio"
  constructor(private http:HttpClient) { }
  
  getPortfolio():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.apiUrl +'/list')
  };
  addPortfolio(portfolio:Portfolio):Observable<Portfolio>{
    return this.http.post<Portfolio>(this.apiUrl + '/add', portfolio, httpOptions)
  }
  
  deletePortfolio(portfolio:Portfolio):Observable<Portfolio>{
    const url = `${this.apiUrl}/${portfolio.id}`
    return this.http.delete<Portfolio>(this.apiUrl + `/delete/${portfolio.id}`)
  }
}
