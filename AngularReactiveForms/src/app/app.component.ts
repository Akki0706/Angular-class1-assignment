import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
 registrationform=new FormGroup({
  userName:new FormControl('Mohan'),
  Password:new FormControl(''),
  ConfirmPassword:new FormControl(''),
  skill:new FormGroup({
    angularLevel:new FormControl(''),
    githubLink: new FormControl(''),
    portfolioLink: new FormControl('')
  })
 })*/
 registrationform!:FormGroup;
 get userName(){
  return this.registrationform.get('userName');
}

get email(){
  return this.registrationform.get('email');
}
 constructor(private fb : FormBuilder){}
 get additionalEmails(){
  return this.registrationform.get('additionalEmails') as FormArray;
 }

 addAdditionalEmail(){
  this.additionalEmails.push(this.fb.control(''));
 }
ngOnInit(){
  this.registrationform = this.fb.group({
    userName : ['Mohan',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/angular/)]],
    Password : [''],
    ConfirmPassword : [''],
    email:[''],
    notify:[''],
   
    skill : this.fb.group({
      angularLevel : [''],
      githubLink : [''],
      portfolioLink: ['']
    }),
  additionalEmails : this.fb.array([])
  } , {validator : PasswordValidator})
}


 loadSampleData(){                    //This is used to load the data when we refresh the page which we want to fill. Patch value is used to fill the data which we want to fill.//
  this.registrationform.patchValue({
    userName:'Mohan',
    Password:'Mohan129',
    ConfirmPassword:'Mohan129'
  })
 }
 onsubmit(){
  console.log(this.registrationform.value);
}

}
function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any }| null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden? {'forbiddenName':{value:control.value}}:null;
  }
  }
  function PasswordValidator(control : AbstractControl) : {[key:string] :boolean}  | null {
    const password = control.get('Password');
    const confirmPassword = control.get('ConfirmPassword');
    if(password?.pristine || confirmPassword?.pristine){
      return null;
    }
    return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch': true} : null;
  }
  
