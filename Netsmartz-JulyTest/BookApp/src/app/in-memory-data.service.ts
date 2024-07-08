import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './BookInterface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const books: Book[] = [
      { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel.',img:'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Novel about racial injustice.' ,img:'https://cdn.bookey.app/files/book/1701405238000.png'},
      { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'Novel about the American dream.',img:'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg' },
      { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'Classic novel about manners and marriage.' ,img:'https://ppld.org/sites/default/files/styles/large/public/images/bookjackets/pride_0.jpg?itok=GJ7_g99r'},
      { id: 5, title: 'Moby-Dick', author: 'Herman Melville', description: 'Epic tale of the whaling ship Pequod and its captain, Ahab.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlimtxw_olWw4HpnXfhjWkF6CDV_X95gUcQ&s' },
      { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', description: 'A historical novel that chronicles the history of the French invasion of Russia.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRuRJiThbVOLvX7X_VIm4NU9Vqo4PQmLAbw&s' },
      { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'Novel about the experiences of a young boy named Holden Caulfield.',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg' },
      { id: 8, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'A psychological novel exploring the moral dilemmas of a young student.' ,img:'https://m.media-amazon.com/images/I/61BwMpStFZL._AC_UF1000,1000_QL80_.jpg'},
      { id: 9, title: 'Brave New World', author: 'Aldous Huxley', description: 'Dystopian novel set in a futuristic world state.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2PMd9wofbkJ6wrvEQY4xyEOT3zXJrg02dw&s' },
      { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'Fantasy novel about the adventures of Bilbo Baggins in Middle-earth.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Vm4hL5kVT_ySnRjWtNAcViTJ9QCvrCcpqg&s' },
      { id: 11, title: 'Fahrenheit 451', author: 'Ray Bradbury', description: 'Dystopian novel about a future where books are banned and burned.' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvofdD7Hs1x_zP08DstY7dwFDaH8cnpRRveQ&s'},
      { id: 12, title: 'Jane Eyre', author: 'Charlotte Brontë', description: 'Novel about the experiences of the orphaned title character, including her growth to adulthood and love for Mr. Rochester.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAY0b2xUWPohsfBQi749OEZGCbOl9_rPr9A&s' },
      { id: 13, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'Epic high-fantasy novel set in Middle-earth, focusing on the quest to destroy the One Ring.',img:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693006100i/195394128.jpg' },
      { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A philosophical novel about a young Andalusian shepherd in his journey to Egypt, after having a recurring dream of finding treasure there.' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T0aNvgYdBX8kfK_qYc046QFsSXhHE2NXWw&s'},
      { id: 15, title: 'Wuthering Heights', author: 'Emily Brontë', description: 'A novel about the turbulent relationship between Catherine Earnshaw and Heathcliff.',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbYWMzoGt8wIauGuvvc5z8fqQcurArxvkwg&s' }
    ];
    
    return { books };
  }
  getId<T extends Book>(checkinglength:T[]):number{
    return Number(checkinglength.length>0? Math.max(...checkinglength.map(t=>t.id))+1 :1);
  }
}

