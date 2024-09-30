import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Interface/Interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private url1='api/mytasks'
  constructor(private http:HttpClient) { }
 httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}

 getdata():Observable<Task[]>{
  
  return this.http.get<Task[]>(this.url1);
 }

 addData(app:Task):Observable<Task>{
  
  return this.http.post<Task>(this.url1,app,this.httpOptions);
}
removeData(id:number):Observable<Task>{
return this.http.delete<Task>(`${this.url1}/${id}`, this.httpOptions)
}
}
