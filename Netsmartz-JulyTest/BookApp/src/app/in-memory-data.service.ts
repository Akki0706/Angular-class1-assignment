import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './BookInterface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const books: Book[] = [
      { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel.' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Novel about racial injustice.' },
      { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'Novel about the American dream.' },
      { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'Classic novel about manners and marriage.' },
      { id: 5, title: 'Moby-Dick', author: 'Herman Melville', description: 'Epic tale of the whaling ship Pequod and its captain, Ahab.' },
      { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', description: 'A historical novel that chronicles the history of the French invasion of Russia.' },
      { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'Novel about the experiences of a young boy named Holden Caulfield.' },
      { id: 8, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'A psychological novel exploring the moral dilemmas of a young student.' },
      { id: 9, title: 'Brave New World', author: 'Aldous Huxley', description: 'Dystopian novel set in a futuristic world state.' },
      { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'Fantasy novel about the adventures of Bilbo Baggins in Middle-earth.' },
      { id: 11, title: 'Fahrenheit 451', author: 'Ray Bradbury', description: 'Dystopian novel about a future where books are banned and burned.' },
      { id: 12, title: 'Jane Eyre', author: 'Charlotte Brontë', description: 'Novel about the experiences of the orphaned title character, including her growth to adulthood and love for Mr. Rochester.' },
      { id: 13, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'Epic high-fantasy novel set in Middle-earth, focusing on the quest to destroy the One Ring.' },
      { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A philosophical novel about a young Andalusian shepherd in his journey to Egypt, after having a recurring dream of finding treasure there.' },
      { id: 15, title: 'Wuthering Heights', author: 'Emily Brontë', description: 'A novel about the turbulent relationship between Catherine Earnshaw and Heathcliff.' }
    ];
    
    return { books };
  }
  getId<T extends Book>(checkinglength:T[]):number{
    return Number(checkinglength.length>0? Math.max(...checkinglength.map(t=>t.id))+1 :1);
  }
}

