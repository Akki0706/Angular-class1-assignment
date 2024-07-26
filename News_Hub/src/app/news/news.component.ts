import { Component } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { NEWS } from '../interface';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { NewssearchComponent } from '../newssearch/newssearch.component';




@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterModule,NgFor,NewssearchComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: NEWS[] = [];
  constructor(private newsService: NewsServiceService) {}

  ngOnInit() {
    this.getnews();    // As the componennt is initialize as the ngoninit calls. It calls only once when the function initialise
  }
  getnews(): void {
    this.newsService.getNews().subscribe((news) => (this.news = news));     // to get observavle data we used subscribe here
  }

  delete(deletenews: NEWS): void {
    this.news = this.news.filter((m) => m != deletenews);  // To delete the particular news from the UI,m is a object here
    this.newsService.deleteNews(deletenews.id).subscribe();
  }
  add(title: string): void {
    title = title.trim();
    if (!title) {
      return;
    }
    this.newsService
      .addNews({ title } as NEWS)
      .subscribe((n) => this.news.push(n));
  }

}
