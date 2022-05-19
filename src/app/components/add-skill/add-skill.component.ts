import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() addOnSkill : EventEmitter<Skill> = new EventEmitter()
  name : string = "";
  porc : number = 0;  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.name.length === 0){
      alert("la tarea no puede estar vacia")
    }
    const newSkill = {
      name : this.name,
      porc : this.porc,
      
    }
    return this.addOnSkill.emit(newSkill)
  }

}
