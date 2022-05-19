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
  private apiUrl ="http://localhost:5001/about"
  constructor(private http : HttpClient) { }
  
  getAbout(): Observable<About[]> {
    return this.http.get<About[]>(this.apiUrl);
  };
}
