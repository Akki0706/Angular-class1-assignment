import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
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

 constructor(private fb : FormBuilder){}

registrationform = this.fb.group({
  userName : ['Mohan'],
  Password : [''],
  ConfirmPassword : [''],
  skill : this.fb.group({
    angularLevel : [''],
    githubLink : [''],
    portfolioLink: ['']
  })
})

 loadSampleData(){
  this.registrationform.patchValue({
    userName:'Mohan',
    Password:'Mohan129',
    ConfirmPassword:'Mohan129'
  })
 }

}
