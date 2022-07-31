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
  
  skill = {} as Skill
  
  
  constructor( private skillService : SkillService) { }
   
  ngOnInit(): void {
      
  }
  
  public showEdit(id? :number){
    this.skillService.findSkill(id=== undefined ? 0 : id).subscribe(dato =>{this.skill=dato})
  }

  onUpdate(){
    return this.editOnSkill.emit(this.skill)
    
  }
 
  

  
}
