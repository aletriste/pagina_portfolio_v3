import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Skill} from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill : Skill = SKILLS[0];
  @Input() width : string = ""
  @Output() onDeleteSkill : EventEmitter<Skill> = new EventEmitter()
  @Output() onEditSkill : EventEmitter<Skill> = new EventEmitter()
  skills : Skill[] = [];

  constructor() { }


  ngOnInit(): void {
  }
  
  onClick(skill : Skill){
    this.onDeleteSkill.emit(skill)
  }
  onEdit(skill:Skill){
    this.onEditSkill.emit(skill)
  }
}
