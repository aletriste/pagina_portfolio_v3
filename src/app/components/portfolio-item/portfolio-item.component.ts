import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { PORTFOLIOS } from 'src/app/data';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() portfolio : Portfolio = PORTFOLIOS[0];
  @Output() onDeletePortfolio: EventEmitter<Portfolio> = new EventEmitter()
  @Output() onEditPortfolio: EventEmitter<Portfolio> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick(portfolio: Portfolio){
    this.onDeletePortfolio.emit(portfolio)
  }
  onEdit(portfolio : Portfolio){
    this.onEditPortfolio.emit(portfolio)
  }
}
