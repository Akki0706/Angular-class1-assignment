import { Injectable } from '@angular/core';
import { Book } from './BookInterface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: Book[] = [];

  addToCart(book: Book): void {
    this.cart.push(book);
    console.log(this.cart);
  }

  getCart(): Book[] {
    return this.cart;
  }
}
