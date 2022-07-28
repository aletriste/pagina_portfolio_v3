import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Skill} from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  isLogged = false;
  @Input() skill : Skill = SKILLS[0];
  @Input() width : string = ""
  @Output() onDeleteSkill : EventEmitter<Skill> = new EventEmitter()
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  
  onClick(skill : Skill){
    this.onDeleteSkill.emit(skill)
  }
}
