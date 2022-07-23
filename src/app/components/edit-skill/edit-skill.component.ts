import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces';
import { SkillService } from 'src/app/service/skill.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skills : Skill[] = [];

  id : number; 

  constructor( private skillService : SkillService) { }
    

  ngOnInit(): void {
    
   
  }
  onUpdate(){

  }

  public showEdit(id :number){
    this.id = id;
  }
}
