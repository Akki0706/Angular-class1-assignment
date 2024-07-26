import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../Interface/User';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = environment.apiUrl; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `${localStorage.getItem('authorization')}`
    })
  };

  constructor(private http: HttpClient,private cookie:CookieService) {}

  register(username:string,email: string, password: string, role: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, { username,email, password, role });
  }

  login(username: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password, role })
      .pipe(
        tap((response) => {
          if (response) {
          this.cookie.set('authToken', response);
            console.log(response);
          }
        })
      );
  }

  getToken(): string | null {
    return this.cookie.get('authToken');
  }


  logout():void{
    this.cookie.delete('authToken');
  }

 
}
