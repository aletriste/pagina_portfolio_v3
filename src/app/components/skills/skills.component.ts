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
   this.skilsService.getSkill().subscribe((skills) => (this.skills = skills));
  };
  
  addSkill(skill:Skill){
    this.skilsService.addSkill(skill).subscribe((skil)=>(this.skills.push(skill)))
  }
  deleteSkill(skill : Skill){
    this.skilsService.deleteSkill(skill).subscribe(()=> this.skills = this.skills.filter((t) => t.id !== skill.id))
  }
  
  editSkill(skill:Skill){
    this.skilsService.editSkill(skill).subscribe((skill)=>this.skills.push(skill))
  }
}
