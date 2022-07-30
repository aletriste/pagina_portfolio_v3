import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EXPE } from 'src/app/data';
import { Expe } from 'src/app/interfaces';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-expe-item',
  templateUrl: './expe-item.component.html',
  styleUrls: ['./expe-item.component.css']
})
export class ExpeItemComponent implements OnInit {
  isLogged = false
  @Input() expe : Expe = EXPE[0]
  @Output() onDeleteExpe : EventEmitter<Expe> = new EventEmitter()
  @Output() onEditExpe : EventEmitter<Expe> = new EventEmitter()

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  onClick(expe: Expe){
    this.onDeleteExpe.emit(expe)
  }
  onEdit(expe : Expe){
    this.onEditExpe.emit(expe)
  }

}
