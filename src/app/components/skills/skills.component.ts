import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skill[] = [];
  constructor(private skilsService : SkillService) { }

  ngOnInit(): void {
    this.skills = this.skilsService.getSkill();
  };
  
  
  
  

}
