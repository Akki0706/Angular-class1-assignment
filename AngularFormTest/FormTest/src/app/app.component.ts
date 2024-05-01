import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractControl,FormControl,FormGroup,ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormArray } from '@angular/forms';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  registrationform!: FormGroup;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = true;
// Getter for userName form control
  get userName() {
    return this.registrationform.get('userName');
  }
// Getter for email form control
  get email() {
    return this.registrationform.get('email');
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {}
 // Initialize the form with FormBuilder
  ngOnInit() {
    this.registrationform = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      Password: ['',[Validators.required]],
      ConfirmPassword: ['',[Validators.required]]
    }, { validator: PasswordValidator });// Add custom validator for password confirmation
  }
 // Function to handle form submission
  onSubmit() {
    console.log(this.registrationform.value);

    const formData = this.registrationform.value;
    const url = 'https://jsonplaceholder.typicode.com/posts';
 // Send form data to server
    this.http
      .post(url, formData)
      .pipe(
        catchError((error) => {
          this.showSuccessMessage = false;
          this.showErrorMessage = true;
          return throwError(error);
        })
      )
      .subscribe((response) => {
        console.log('Response:', response);
        this.showSuccessMessage = true;
        this.showErrorMessage = false;
      });
  }

 
}

// Custom validator function to check password and confirm password match
function PasswordValidator(control : AbstractControl) : {[key:string] :boolean}  | null {
  const password = control.get('Password');
  const confirmPassword = control.get('ConfirmPassword');
  if(password?.pristine || confirmPassword?.pristine){
    return null;
  }
  return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch': true} : null;
}
