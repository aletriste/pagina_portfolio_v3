import { Component, OnInit, Input} from '@angular/core';
import { Skills} from 'src/app/interfaces';
import { SKILLS } from 'src/app/data';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill : Skills = SKILLS[0];
  @Input() width : string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
