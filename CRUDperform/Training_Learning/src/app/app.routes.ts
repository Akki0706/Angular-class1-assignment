import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginformComponent } from './Shared/components/login/loginform/loginform.component';
import { RegisterformComponent } from './Shared/components/register/registerform/registerform.component';
import { authGuard } from './core/guards/auth.guard';
import { ApplicationComponent } from './Shared/components/application/application.component';
import { AddFormComponent } from './features/add-form/add-form.component';
import { UpdateFormComponent } from './features/update-form/update-form.component';
import { SearchDetailsComponent } from './features/search-details/search-details.component';


export const routes: Routes = [
    {path:'dashboard',loadComponent:()=>import('./features/dashboard/dashboard.component').then((m)=>m.DashboardComponent),canActivate:[authGuard]},
 
    {path:'login',loadComponent:()=>import('./Shared/components/login/loginform/loginform.component').then((m)=>m.LoginformComponent)},
   {path:'register',loadComponent:()=>import('./Shared/components/register/registerform/registerform.component').then((m)=>m.RegisterformComponent)},
   {path:"",redirectTo:"/register",pathMatch:"full"},
   {path:'app',component:ApplicationComponent},
   {path:'addForm',component:AddFormComponent},
   {path:'update/:id',component:UpdateFormComponent},
   {path:'detail/:id',component:SearchDetailsComponent},
];
