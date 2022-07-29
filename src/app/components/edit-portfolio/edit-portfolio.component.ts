import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {
  @Output() editOnPortfolio : EventEmitter<Portfolio> = new EventEmitter()
  portfolio = {} as Portfolio;

  constructor(public portfolioService : PortfolioService) { }

  ngOnInit(): void {
  }
  onUpdate(){
    return this.editOnPortfolio.emit(this.portfolio)
  }

  public showEdit(id? :number){
    this.portfolioService.findPortfolio(id=== undefined ? 0 : id).subscribe(dato =>{this.portfolio=dato})
  }
}
