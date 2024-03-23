import { Component } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { NEWS } from '../interface';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  news: NEWS[] = [];
  constructor(private newsService: NewsServiceService) {}

  ngOnInit() {
    this.getnews();
  }
  getnews(): void {
    this.newsService.getNews().subscribe((news) => (this.news = news));
  }
  delete(deletenews: NEWS): void {
    this.news = this.news.filter((m) => m != deletenews);
    this.newsService.deleteNews(deletenews.id).subscribe();
  }
}
