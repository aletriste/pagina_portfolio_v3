import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EducationService } from 'src/app/service/education.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  @Output() editOnEducacion :  EventEmitter<Educacion> = new EventEmitter()
  education = {} as Educacion

  constructor(private educacionService : EducationService) { }

  ngOnInit(): void {
  }

  showEdit(id? : number){
    this.educacionService.findEducacion(id === undefined ? 0 : id).subscribe(dato => {this.education = dato}) 
  }

  onUpdate(){
    return this.editOnEducacion.emit(this.education)
  }

}
