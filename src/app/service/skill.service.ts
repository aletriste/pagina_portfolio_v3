import { Injectable } from '@angular/core';
import { Skill } from '../interfaces';
import { SKILLS } from '../data';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl ="http://localhost:5001/skill"
  constructor(private http:HttpClient) { }
  
  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  };
  addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl, skill, httpOptions)
  }
  
  deleteSkill(skill:Skill):Observable<Skill>{
    const url = `${this.apiUrl}/${skill.id}`
    return this.http.delete<Skill>(url)
  }
}
