import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../BookInterface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getBooks().pipe(
      catchError(error => {
        console.error('Error fetching books', error);
        return of([]); // Return an empty array if there is an error
      })
    ).subscribe((books) => this.books = books);
  }
}
