import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { PORTFOLIOS } from 'src/app/data';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  isLogged = false;
  @Input() portfolio : Portfolio = PORTFOLIOS[0];
  @Output() onDeletePortfolio: EventEmitter<Portfolio> = new EventEmitter()
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  onClick(portfolio: Portfolio){
    this.onDeletePortfolio.emit(portfolio)
  }
}
