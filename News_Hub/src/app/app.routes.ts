import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';

export const routes: Routes = [
    {path:'news',component:NewsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'detail/:id',component:NewsdetailComponent},
    {path:'',redirectTo:'news',pathMatch:'full'},
];
