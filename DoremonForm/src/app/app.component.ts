import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DoremonForm';
  Gadgets=['BambooCopter','AnywhereDoor','BigLight','SmallLight']
  Communicate=['Email','SMS','Phone']
  registrationform!:FormGroup;
  get username(){

    return this.registrationform.get('username');
  }
  get email(){
    return this.registrationform.get('email');
  }
  get DOB(){
    return this.registrationform.get('DOB');
  }
  get Gender(){
    return this.registrationform.get('Gender');
  }
  get Email(){
    return this.registrationform.get('Email');
  }
  get addemail(){
    return this.registrationform.get('addemail');
  }
  get password(){
    return this.registrationform.get('password');
  }
  get confirmPassword(){
    return this.registrationform.get('confirmPassword');
  }
  get FavouriteGadget(){
    return this.registrationform.get('FavouriteGadget');
  }
  get Membership(){
    return this.registrationform.get('Membership');
  }

  get notify(){
    return this.registrationform.get('notify');
  }
  get communicationMethod(){
    return this.registrationform.get('communicationMethod');
  }

  constructor(private fb:FormBuilder){}
  ngOnInit(){
  this.registrationform=this.fb.group({
    username:['Ankit',[Validators.required , Validators.minLength(4), forbiddenNameValidator()]],
    DOB:['',[Validators.required, minage(13)]],
    Gender:['Male'],

    AccountInfo:this.fb.group({
      Email:['akki@ 123'],
      addemail:[],
      password:[],
      confirmPassword:[],
      FavouriteGadget:[''],
      Membership:[''],
    }),
    NotificationPreference:this.fb.group({
      notify:[''],
      communicationMethod:['']
    })
  })
}
loadSampleData(){
this.registrationform.patchValue({
  username:'Ankit',
  AccountInfo: {
    Email: 'akki@123'
  }
})
}
onsubmit(){
  console.log(this.registrationform.value);
}
}
function forbiddenNameValidator():ValidatorFn{
  return (control:AbstractControl):{[key:string]:any }| null => {
    const arr=['Nobita','Shizuka','Doremon','Gyan','Suniyo','Degisuki']
    for(let i=0;i<arr.length;i++){
      if(arr[i]==control.value || arr[i].toLowerCase()){
        return{'forbiddenName':{value:control.value}}
      }
    }
    return null;
  }

  }

   function minage(minAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control || !control.value) {
        return null;
      }
      const DOB = new Date(control.value);
      const ageDiff = Date.now() - DOB.getTime();
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      return calculatedAge < minAge
        ? { minAge: { value: control.value } }
        : null;
    };
  }


