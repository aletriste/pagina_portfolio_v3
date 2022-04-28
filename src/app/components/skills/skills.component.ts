import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { Skills } from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skills[] = SKILLS;
  constructor(private skilsService : SkillService) { }

  ngOnInit(): void {
  }
  getSkills(){
    this.skills = this.skilsService.getSkill();
  }

}
