import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Educacion } from 'src/app/interfaces';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  @Output() addOnEducation : EventEmitter<Educacion> = new EventEmitter()
  centro: string = ""
  titulo : string = ""
  text : string = ""
  imageUrl : string = ""
  linkUrl : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newEducation = {
      centro : this.centro,
      titulo : this.titulo,
      text : this.text,
      imageUrl : this.imageUrl,
      linkUrl: this.linkUrl,
    }

    return this.addOnEducation.emit(newEducation)
  }

}
