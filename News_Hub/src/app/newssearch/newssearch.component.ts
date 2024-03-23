import { Component } from '@angular/core';
import { Observable,Subject,debounceTime,distinctUntilChanged,switchMap } from 'rxjs';
import { NEWS } from '../interface';
import { NewsServiceService } from '../news-service.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe,NgFor } from '@angular/common';


@Component({
  selector: 'app-newssearch',
  standalone: true,
  imports: [AsyncPipe,NgFor,RouterModule,FormsModule],
  templateUrl: './newssearch.component.html',
  styleUrl: './newssearch.component.css'
})
export class NewssearchComponent {
  news$!: Observable<NEWS[]>;
  private searchnews = new Subject<string>();

  constructor(private newsService: NewsServiceService) {}

  search(word: string): void {
    this.searchnews.next(word);
  }

  ngOnInit(): void {
    this.news$ = this.searchnews.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((word: string) => this.newsService.searchNews(word))
    );
  }

}
