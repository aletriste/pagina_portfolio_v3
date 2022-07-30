import { Component, OnInit,} from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Portfolio } from 'src/app/interfaces';

import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isLogged = false;

  porfolio : Portfolio[] = []
  constructor(private portfolioservice: PortfolioService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.portfolioservice.getPortfolio().subscribe((portfolio)=>this.porfolio = portfolio);
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  };
  addPortfolio(portfolio:Portfolio){
    this.portfolioservice.addPortfolio(portfolio).subscribe((portfolio)=>(this.porfolio.push(portfolio)))
  }
  deletePortfolio(portfolio : Portfolio){
    this.portfolioservice.deletePortfolio(portfolio).subscribe(()=> this.porfolio = this.porfolio.filter((t) => t.id !== portfolio.id))
  }
  editPortfolio(portfolio:Portfolio){
    this.portfolioservice.editPortfolio(portfolio).subscribe((porfolio)=>this.porfolio.push(porfolio))
    window.location.reload();
  }
}
