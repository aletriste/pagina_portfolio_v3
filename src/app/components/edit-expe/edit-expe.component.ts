import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expe } from 'src/app/interfaces';
import { ExpeService } from 'src/app/service/expe.service';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {
  @Output() editOnExpe : EventEmitter<Expe> = new EventEmitter()
  expe = {} as Expe
  
  constructor(private expeService : ExpeService ) { }

  ngOnInit(): void {
  }

  public showEdit(id? :number){
    this.expeService.findeExpe(id=== undefined ? 0 : id).subscribe(dato =>{this.expe=dato})
  }

  onUpdate(){
    return this.editOnExpe.emit(this.expe)
  }

}
