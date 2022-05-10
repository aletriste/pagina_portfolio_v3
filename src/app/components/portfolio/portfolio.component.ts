import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/interfaces';
import { PORTFOLIOS } from 'src/app/data';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  porfolio : Portfolio[] = []
  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    this.porfolio = this.portfolioservice.getPortfolio()
  }

}
