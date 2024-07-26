import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginformComponent } from './Shared/components/login/loginform/loginform.component';
import { RegisterformComponent } from './Shared/components/register/registerform/registerform.component';
import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
    {path:'dashboard',loadComponent:()=>import('./features/dashboard/dashboard.component').then((m)=>m.DashboardComponent),canActivate:[authGuard]},
 
    {path:'login',loadComponent:()=>import('./Shared/components/login/loginform/loginform.component').then((m)=>m.LoginformComponent)},
   {path:'register',loadComponent:()=>import('./Shared/components/register/registerform/registerform.component').then((m)=>m.RegisterformComponent)},
   {path:"",redirectTo:"/register",pathMatch:"full"}
];
