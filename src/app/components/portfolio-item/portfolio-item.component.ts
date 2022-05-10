import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { PORTFOLIOS } from 'src/app/data';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() portfolio : Portfolio = PORTFOLIOS[0];
  constructor() { }

  ngOnInit(): void {
  }

}
