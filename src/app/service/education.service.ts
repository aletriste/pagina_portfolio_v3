import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces';
import { EDUCACION } from '../data';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }
  getEducation() : Educacion[] {
    return EDUCACION;
  }
}
