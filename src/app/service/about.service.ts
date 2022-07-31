import { Injectable } from '@angular/core';
import { About } from '../interfaces';
import { Observable, of } from 'rxjs';
import { HttpBackend, HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl ="https://sleepy-reaches-29571.herokuapp.com/about"
  constructor(private http : HttpClient) { }
  
  getAbout(): Observable<About[]> {
    return this.http.get<About[]>(this.apiUrl+'/list');
  };

  findAbout(id:number):Observable<About>{
    return this.http.get<About>(this.apiUrl + `/find/${id}`)
  }

  editAbout(about:About):Observable<About>{
    return this.http.put<About>(this.apiUrl + '/edit', about, httpOptions)
  }
}
