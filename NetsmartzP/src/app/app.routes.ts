import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
export const routes: Routes = [
    {path:"books" , component:BooksComponent},
    {path:"bookdetail/:id" ,component:BookdetailsComponent}
  
];
