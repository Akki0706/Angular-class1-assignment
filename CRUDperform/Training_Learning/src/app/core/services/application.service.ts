import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationInterface } from '../Interface/AppInterface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http:HttpClient) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  private url1='api/myapplications'
 

  getapp():Observable<ApplicationInterface[]>{
    return this.http.get<ApplicationInterface[]>(this.url1);
  }
 
  getappdetail(id:number):Observable<ApplicationInterface>{
    return this.http.get<ApplicationInterface>(`${this.url1}/${id}`);
  }
 
  addapp(app:ApplicationInterface):Observable<ApplicationInterface>{
  
      return this.http.post<ApplicationInterface>(this.url1,app,this.httpOptions);
  }
  deleteapp(id:number):Observable<ApplicationInterface>{
    return this.http.delete<ApplicationInterface>(`${this.url1}/${id}`, this.httpOptions)
}
updateapp(app:ApplicationInterface):Observable<any>{
  return this.http.put(this.url1,app,this.httpOptions);
}

searchApps(word: string): Observable<ApplicationInterface[]> {
  if (!word.trim()) {
    return of([]);
  }
  return this.http
    .get<ApplicationInterface[]>(`${this.url1}/?app_name=${word}`)
}


}
