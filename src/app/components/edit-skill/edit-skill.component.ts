import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { SkillService } from 'src/app/service/skill.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
 
  @Output() editOnSkill : EventEmitter <Skill> = new EventEmitter()
  skills : Skill[] = [];

  skill = {} as Skill

  name : string = "";
  porc : number = 0;  

  constructor( private skillService : SkillService) { }
    

  ngOnInit(): void {
    
   
  }
  onUpdate(){
    const newSkill = {
      name : this.name,
      porc : this.porc,
      
    }
    return this.editOnSkill.emit(newSkill)
  }
 

  public showEdit(id? :number){
    this.skillService.findSkill(id=== undefined ? 0 : id).subscribe(dato =>{this.skill=dato})
  }
}
