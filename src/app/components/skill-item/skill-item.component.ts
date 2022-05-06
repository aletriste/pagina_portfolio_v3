import { Component, OnInit, Input} from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
