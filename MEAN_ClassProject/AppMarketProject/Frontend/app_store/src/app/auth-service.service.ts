import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  register(email: string, password: string,role:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password,role });
  }

  login(email: string, password: string,role:string ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password,role }).
    pipe(
      tap((response)=>{
      if(response ){
        localStorage.setItem('authToken',response);
        console.log(response);
        
      }}))
  }


  getToken():string | null{
    return localStorage.getItem('authToken');
  }

  logout():void{
    localStorage.removeItem('authToken');
  }
}
