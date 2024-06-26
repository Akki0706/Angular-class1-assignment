import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthServiceService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required] // Default to 'user'
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { email, password, role } = this.registerForm.value;

    this.authService.register(email, password, role).subscribe(
      (data) => {
        console.log(data); // Handle successful registration
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error); // Handle registration error
        this.error = error.error?.message || 'Registration failed';
      }
    );
  }

}
