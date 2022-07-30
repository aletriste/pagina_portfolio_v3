import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expe } from 'src/app/interfaces';

@Component({
  selector: 'app-add-expe',
  templateUrl: './add-expe.component.html',
  styleUrls: ['./add-expe.component.css']
})
export class AddExpeComponent implements OnInit {
  @Output() addOnExpe : EventEmitter<Expe> = new EventEmitter()
  empresa : string = "";
  ubicacion : string = "";
  cargo : string = "";
  desde : string = "";
  hasta : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newExpe = {
      empresa : this.empresa,
      ubicacion : this.ubicacion,
      cargo : this.cargo,
      desde : this.desde,
      hasta : this.hasta,
    }
    return this.addOnExpe.emit(newExpe)
  }

}
