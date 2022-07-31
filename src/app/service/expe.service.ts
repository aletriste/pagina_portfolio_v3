import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expe } from '../interfaces';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpeService {
  private apiUrl ="https://sleepy-reaches-29571.herokuapp.com/expe"

  constructor(private http : HttpClient) { }

  getExpe(): Observable <Expe[]> {
    return this.http.get<Expe[]>(this.apiUrl + '/list');
  };

  addExpe(expe:Expe):Observable<Expe>{
    return this.http.post<Expe>(this.apiUrl + '/add', expe, httpOptions)
  }

  deleteExpe(expe:Expe):Observable<Expe>{
    return this.http.delete<any>(this.apiUrl + `/delete/${expe.id}`)
  }

  findeExpe(id:number):Observable<Expe>{
    return this.http.get<Expe>(this.apiUrl + `/find/${id}`)
  }

  editExpe(expe:Expe):Observable<Expe>{
    return this.http.put<Expe>(this.apiUrl + '/edit', expe, httpOptions)
  }
}
