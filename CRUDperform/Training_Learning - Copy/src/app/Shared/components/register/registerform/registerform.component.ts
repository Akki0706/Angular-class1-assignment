import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../../core/services/auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../../../features/message-dialog/message-dialog.component';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'] 
})
export class RegisterformComponent {
  registerForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$")]],
      role: ['user', Validators.required]
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get role() {
    return this.registerForm.get('role');
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { username, email, password, role } = this.registerForm.value;

    this.authService.register(username, email, password, role).subscribe(
      () => {
        this.dialog.open(MessageDialogComponent, {
          data: { message: 'Registration successful!' }
        });
        this.router.navigate(['/login']); 
      },
      error => {
        const errorMessage = error.error.message || 'Failed to register. Please try again.';
        this.dialog.open(MessageDialogComponent, {
          data: { message: errorMessage }
        });
      }
    );
  }
}
