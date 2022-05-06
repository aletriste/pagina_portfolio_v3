import { Injectable } from '@angular/core';
import { Skill } from '../interfaces';
import { SKILLS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  getSkill(): Skill[] {
    return SKILLS;
  };
  decirHola(){
    console.log('este servicio dice hola')
  }
  
}
