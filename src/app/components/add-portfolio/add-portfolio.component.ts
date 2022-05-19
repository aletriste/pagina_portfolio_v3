import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Portfolio } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit {
  @Output() addOnPorfolio : EventEmitter<Portfolio> = new EventEmitter()
  titulo: string = ""
  subtitulo : string = ""
  text : string = ""
  imageUrl : string = ""
  linkUrl : string = ""
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const newPortfolio = {
      titulo: this.titulo,
      subtitulo : this.subtitulo,
      text : this.text,
      imageUrl : this.imageUrl,
      linkUrl : this.linkUrl
    };
    return this.addOnPorfolio.emit(newPortfolio)
  }
}
