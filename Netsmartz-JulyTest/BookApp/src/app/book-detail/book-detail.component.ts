import { Component, OnInit } from '@angular/core';
import { Book } from '../BookInterface';
import { BookServiceService } from '../book-service.service';
import { CartServiceService } from '../cart-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceService,
    private cartService: CartServiceService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe((book) => this.book = book);
  }

  addToCart(book: Book): void {
    if (this.book) {
      this.cartService.addToCart(book);
      this.router.navigate(['/cart']); // Navigate to the cart page
    }
  }
}
