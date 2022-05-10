import { Component, OnInit, Input } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EDUCACION } from 'src/app/data';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  education : Educacion [] = []
  constructor(private educationservice : EducationService ) { }

  ngOnInit(): void {
    this.education = this.educationservice.getEducation();
  }

}
