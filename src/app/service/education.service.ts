import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces';
import { EDUCACION } from '../data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = "http://localhost:8080/education"
  constructor(private http:HttpClient) { }
  
  getEducation():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrl + '/list');
  };

  addEducation(education:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl + '/add', education, httpOptions);
  }

  deleteEducation(education:Educacion):Observable<Educacion>{
    const url = `${this.apiUrl}/${education.id}`
    return this.http.delete<Educacion>(this.apiUrl + `/delete/${education.id}`)
  }
}
