import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component:BookListComponent },
    { path: 'book', component:BookListComponent },
    { path: 'book/:id', component: BookDetailComponent},
    { path: 'cart', component: CartComponent },
    {path:"" , redirectTo:"/book" ,pathMatch:'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }