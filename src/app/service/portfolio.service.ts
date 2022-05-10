import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces';
import { PORTFOLIOS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }
  getPortfolio() : Portfolio[]{
    return PORTFOLIOS;
  }
  
}
