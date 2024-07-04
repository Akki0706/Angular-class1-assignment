import { Component, OnInit } from '@angular/core';
import { Book } from '../BookInterface';
import { CartServiceService } from '../cart-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: Book[] = [];

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart().sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.cart)
  }

  
  delete(book: Book): void {
    // Remove the book from the cart array
    this.cart = this.cart.filter(b => b.id !== book.id);
    // Optionally: You can handle any service calls to sync with a server here
    // this.cartService.removeBook(book.id).subscribe();
  }
}
