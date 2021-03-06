import { Injectable } from '@angular/core';
import { Skill } from '../interfaces';
import { SKILLS } from '../data';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl ="https://sleepy-reaches-29571.herokuapp.com/skill"
  constructor(private http:HttpClient) { }
  
  getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl + '/list');
  };
  
  addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl + '/add', skill, httpOptions)
  }
  
  deleteSkill(skill:Skill):Observable<Skill>{
    const url = `${this.apiUrl}/delete${skill.id}`
    return this.http.delete<any>(this.apiUrl + `/delete/${skill.id}`)
  }

  findSkill(id:number):Observable<Skill>{
    return this.http.get<Skill>(this.apiUrl + `/find/${id}`)
  }
  editSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(this.apiUrl + '/edit', skill, httpOptions)
  }
      
}
