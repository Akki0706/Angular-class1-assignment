import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../../core/services/auth-service.service';
import { NgClass, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../../../features/message-dialog/message-dialog.component';
import { LoaderComponent } from '../../../../features/loader/loader.component';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgClass, LoaderComponent],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  showLoader: boolean = false;
  loginForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get role() {
    return this.loginForm.get('role');
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }



    const { username, password, role } = this.loginForm.value;

    this.authService.login(username, password, role).subscribe(
      (token) => {
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Login successful!' }
        });
        this.showLoader = true;
        setTimeout(() => {
          this.showLoader = false;
          this.router.navigate(['/dashboard']);
        }, 3000); 
      },
      error => {
       
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Failed to login. Please try again.' }
        });
      }
    );
  }
}
