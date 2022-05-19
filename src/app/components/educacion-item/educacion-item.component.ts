import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EDUCACION } from 'src/app/data';
 
@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  @Input() education : Educacion = EDUCACION[0]
  @Output() onDeleteEducation : EventEmitter<Educacion> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(education : Educacion){
    this.onDeleteEducation.emit(education)
  }

}
