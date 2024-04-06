//import { Component,OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { AbstractControl,FormControl,FormGroup,ValidatorFn } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { NgIf } from '@angular/common';
// import { FormArray } from '@angular/forms';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,ReactiveFormsModule,CommonModule,NgIf],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {

//   doraemonForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.doraemonForm = this.formBuilder.group({
//       personalInfo: this.formBuilder.group({
//         name: ['', [Validators.required, Validators.minLength(4), this.forbiddenNameValidator.bind(this)]],
//         dob: ['', [Validators.required, this.ageValidator]],
//         gender: ['', Validators.required]
//       }),
//       accountInfo: this.formBuilder.group({
//         email: ['', [Validators.email, Validators.required]],
//         password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
//         confirmPassword: ['', Validators.required],
//         favoriteGadget: ['', Validators.required],
//         membershipType: ['', Validators.required],
//         notificationPreferences: this.formBuilder.group({
//           notifyMe: [false],
//           preferredCommunicationMethod: ['']
//         })
//       }),
//       additionalEmails: this.formBuilder.array([])
//     }, {
//       validators: this.confirmPasswordValidator
//     });
//   }

//   forbiddenNameValidator(control : any) {
//     const forbiddenNames = ['doraemon', 'nobita', 'shizuka', 'gian', 'suneo'];
//     const forbidden = forbiddenNames.includes(control.value.toLowerCase());
//     return forbidden ? { 'forbiddenName': true } : null;
//   }

//   ageValidator(control : any) {
//     const today = new Date();
//     const minDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
//     const selectedDate = new Date(control.value);
//     return selectedDate <= minDate ? null : { 'invalidAge': true };
//   }

//   confirmPasswordValidator(group : any) {
//     const password = group.get('accountInfo.password').value;
//     const confirmPassword = group.get('accountInfo.confirmPassword').value;
//     return password === confirmPassword ? null : { 'passwordMismatch': true };
//   }

//   get f() { return this.doraemonForm.controls; }

//   get additionalEmails() {
//     return this.doraemonForm.get('additionalEmails') as FormArray;
//   }

//   addEmail() {
//     this.additionalEmails.push(this.formBuilder.control(''));
//   }

//   onSubmit() {
//     if (this.doraemonForm.invalid) {
//       return;
//     }
//     console.log('Form submitted successfully!');
//   }
// }
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports :[ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  doraemonForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.doraemonForm = this.formBuilder.group({
      personalInfo: this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4), this.forbiddenNameValidator.bind(this)]],
        dob: ['', [Validators.required, this.ageValidator]],
        gender: ['', Validators.required]
      }),
      accountInfo: this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
        confirmPassword: ['', Validators.required],
        favoriteGadget: ['', Validators.required],
        membershipType: ['', Validators.required],
        notificationPreferences: this.formBuilder.group({
          notifyMe: [false],
          preferredCommunicationMethod: ['']
        })
      }),
      additionalEmails: this.formBuilder.array([])
    }, {
      validators: this.confirmPasswordValidator
    });
  }

  forbiddenNameValidator(control: any) {
    const forbiddenNames = ['doraemon', 'nobita', 'shizuka', 'gian', 'suneo'];
    const forbidden = forbiddenNames.includes(control.value.toLowerCase());
    return forbidden ? { 'forbiddenName': true } : null;
  }

  ageValidator(control: any) {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
    const selectedDate = new Date(control.value);
    return selectedDate <= minDate ? null : { 'invalidAge': true };
  }

  confirmPasswordValidator(group: any) {
    const password = group.get('accountInfo.password').value;
    const confirmPassword = group.get('accountInfo.confirmPassword').value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  get f() { return this.doraemonForm.controls; }

  get additionalEmails() {
    return this.doraemonForm.get('additionalEmails') as FormArray;
  }

  addEmail() {
    this.additionalEmails.push(this.formBuilder.control(''));
  }

  onSubmit() {
    if (this.doraemonForm.invalid) {
      return;
    }
    console.log('Form submitted successfully!');
  }
}

