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
    this.portfolioservice.getPortfolio().subscribe((portfolio)=>this.porfolio = portfolio)
  };
  addPortfolio(portfolio:Portfolio){
    this.portfolioservice.addPortfolio(portfolio).subscribe((portfolio)=>(this.porfolio.push(portfolio)))
  }
  deletePortfolio(portfolio : Portfolio){
    this.portfolioservice.deletePortfolio(portfolio).subscribe(()=> this.porfolio = this.porfolio.filter((t) => t.id !== portfolio.id))
  }

}
