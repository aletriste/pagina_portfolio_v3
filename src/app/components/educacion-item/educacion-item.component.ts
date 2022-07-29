import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EDUCACION } from 'src/app/data';
import { TokenService } from 'src/app/service/token.service';
 
@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  isLogged = false;
  @Input() education : Educacion = EDUCACION[0]
  @Output() onDeleteEducation : EventEmitter<Educacion> = new EventEmitter()
  @Output() onEditEducaion: EventEmitter<Educacion> = new EventEmitter()
  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onClick(education : Educacion){
    this.onDeleteEducation.emit(education)
  }
  onEdit(education : Educacion){
    return this.onEditEducaion.emit(education)
  }
}
