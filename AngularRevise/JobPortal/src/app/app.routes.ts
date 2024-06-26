import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'jobs',component:JobsComponent},
    {path:'apply',component:ApplyJobComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'',redirectTo:'/jobs',pathMatch:'full'},
    {path:'detail/:id',component:JobsDetailsComponent},
];
