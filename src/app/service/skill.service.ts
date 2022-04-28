import { Injectable } from '@angular/core';
import { Skills } from '../interfaces';
import { SKILLS } from '../data';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  getSkill(): Skills[] {
    return SKILLS;
  }

  
}
