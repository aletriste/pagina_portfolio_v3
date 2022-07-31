import { Component, OnInit, Input } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { EDUCACION } from 'src/app/data';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  education : Educacion [] = []
  isLogged = false;
  constructor(private educationservice : EducationService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.educationservice.getEducation().subscribe((education) => (this.education = education));
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  addEducation(education:Educacion){
    this.educationservice.addEducation(education).subscribe((data)=>{this.education.push(education)})
  }

  deleteEducation(education : Educacion){
    this.educationservice.deleteEducation(education).subscribe(()=> this.education = this.education.filter((t) => t.id !== education.id))
  }

  editEducation(education:Educacion){
    this.educationservice.editEducacion(education).subscribe(data => {this.ngOnInit()})
    
  }

}
