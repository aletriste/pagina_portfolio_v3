import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EDUCACION } from 'src/app/data';
 
@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {
  @Input() education : Educacion = EDUCACION[0]
  constructor() { }

  ngOnInit(): void {
  }

}
