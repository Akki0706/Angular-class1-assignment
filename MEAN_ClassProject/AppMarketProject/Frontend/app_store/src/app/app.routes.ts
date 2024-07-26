import { Routes } from '@angular/router';
import { CreateAppformComponent } from './create-appform/create-appform.component';
import { UpdateComponent } from './update/update.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { MyProfileUserComponent } from './my-profile-user/my-profile-user.component';
import { InstalledAppsUserComponent } from './installed-apps-user/installed-apps-user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


export const routes: Routes = [
    {path:'create',component:CreateAppformComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'home',component:HomePageComponent},
    {path:'detail/:id',component:AppDetailComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'myProfile',component:MyProfileComponent},
    {path:'userdashboard',component:UserDashboardComponent},
    {path:'admindashboard',component:AdminDashboardComponent},
    {path:'homeUser',component:HomeUserComponent},
    {path:'myProfileUser',component:MyProfileUserComponent},
    {path:'installedApps',component:InstalledAppsUserComponent},
    {path:'login',component:LoginFormComponent},
   {path:'register',component:RegisterFormComponent}
];
