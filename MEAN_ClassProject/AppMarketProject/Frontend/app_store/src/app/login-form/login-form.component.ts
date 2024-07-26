import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports:[NgIf,ReactiveFormsModule,NgClass],
  standalone:true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['',Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password ,role} = this.loginForm.value;

    this.authService.login(email, password,role).subscribe(
      (token) => {
        console.log('LOgin Successfull');
       // console.log(token);
         this.router.navigate(['/myProfileUser']);
      },
    );
  }
}
