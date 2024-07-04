import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-my-profile-user',
  standalone: true,
  imports: [NgIf],
  templateUrl: './my-profile-user.component.html',
  styleUrl: './my-profile-user.component.css'
})
export class MyProfileUserComponent {
  token: string | null = '';

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.token = this.authService.getToken();
  }

}
