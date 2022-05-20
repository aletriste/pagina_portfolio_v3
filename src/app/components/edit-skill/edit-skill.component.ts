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
  skill : Skill | undefined
  constructor( private skillService : SkillService,
    private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.skillService.editSkill(id).subscribe((skill)=>this.skill = skill)
  }
  onUpdate(){
    
  }
}
