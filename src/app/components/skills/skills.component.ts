import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills : Skill[] = [];
  isLogged = false;
  constructor(private skilsService : SkillService, private tokenService:TokenService ) { }

  ngOnInit(): void {
   this.skilsService.getSkill().subscribe((skills) => (this.skills = skills));
   if(this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged = false;
  }
  };
  
  addSkill(skill:Skill){
    this.skilsService.addSkill(skill).subscribe((data)=>(this.skills.push(skill)))
  }
  deleteSkill(skill : Skill){
    this.skilsService.deleteSkill(skill).subscribe(()=> this.skills = this.skills.filter((t) => t.id !== skill.id))
  }
  
  editSkill(skill:Skill){
    this.skilsService.editSkill(skill).subscribe(data=>{this.ngOnInit()})
    
    
  }
  
}
