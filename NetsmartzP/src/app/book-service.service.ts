import { Injectable } from '@angular/core';
import { Books } from './books/Books';
import { BOOKS } from './MyBooks';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  // //function for providing book-items
  getdata():Books[]{
    return BOOKS;
  }
  //function for providing books of books-items 

  getdetails(id:number):Books{
    const detail=BOOKS.find(val=>val.id===id)!;
    return detail;
  }
//method to update the availability status of a book.
  updateAvailability(id:number,availability:boolean){
    const book=BOOKS.find(val=>val.id===id)!;
    if(book){
      book.availabilitystatus=availability;
    }
  }
}
