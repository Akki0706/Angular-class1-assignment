import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './core/services/auth-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CookieService } from 'ngx-cookie-service';
import { NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './features/search/search.component';
import { ThemeComponent } from './features/theme/theme.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HttpClientModule,MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,NgIf,MatDialogModule,SearchComponent,ThemeComponent],
  providers: [
    AuthServiceService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Training_Learning';
  constructor(private cookie:CookieService , private authService : AuthServiceService, private router :Router){}
  testing :boolean=false;
  ngDoCheck(){
    if(this.cookie.get('authToken')){
      this.testing=true;
    }
    else{
      this.testing = false;
    }
  }

  logout():any{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
