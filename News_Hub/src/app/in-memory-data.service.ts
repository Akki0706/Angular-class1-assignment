import { Injectable } from '@angular/core';
import { NEWS } from './interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const news = [
      {
        id: 1,
        title: 'XYZ',
        category: 'SPorts',
        description:
          'Today Match.',
        author: 'Mr.Kohli',
        publication: new Date('2024-03-20'),
      },
      {
        id: 2,
        title: 'hdgsauygusdgksdugsd',
        category: 'Technology',
        description:
          'Lhsdougyosduhldsiudbs u.',
        author: 'ABc',
        publication: new Date('2024-03-19'),
      },
      {
        id: 3,
        title: 'Pfadsfdsfsddfsdfdsfdsds X',
        category: 'sdsadsdf',
        description:
          'jbfudsvykfghsknlihbdsi.',
        author: 'Podssdfdsfsdt',
        publication: new Date('2024-03-25'),
      },
      {
        id: 4,
        title: 'Sportsdfsdfsdfpionship',
        category: 'Ssdfsdfdsfsd',
        description:
          'Ldsfsdafsdfds a nail-biting game.',
        author: 'Sporsdfsadfsdfsddent',
        publication: new Date('2024-03-17'),
      },
    ];
    return { news };
  }

  genId(news: NEWS[]): number {
    return news.length > 0 ? Math.max(...news.map((n) => n.id)) + 1 : 1;
  }
}
