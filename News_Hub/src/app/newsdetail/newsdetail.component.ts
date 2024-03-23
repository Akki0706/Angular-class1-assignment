import { Component } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { NEWS } from '../interface';
import { FormsModule } from '@angular/forms';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsdetail',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './newsdetail.component.html',
  styleUrl: './newsdetail.component.css'
})
export class NewsdetailComponent {
  constructor(
    private newsService:NewsServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  newsss?: NEWS;

  ngOnInit(): void {
    this.getOneNews();
  }

  getOneNews(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getOnenews(id).subscribe((n) => {
      this.newsss = n;
    });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.newsss) {
      this.newsService.updateNews(this.newsss).subscribe(() => this.goBack());
    }
  }

}
