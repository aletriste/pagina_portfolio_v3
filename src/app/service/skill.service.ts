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
  private apiUrl ="http://localhost:8080/skill"
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
}
