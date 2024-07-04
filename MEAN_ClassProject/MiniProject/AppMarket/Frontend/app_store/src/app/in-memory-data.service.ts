import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApplicationInterface } from '../../AppInterface';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

 createDb(){
  const myApplication=[
    { id:1,
      user_id: 'user1',
      app_name: 'FlipCart',
      description: 'It is a website which is used for various purposes like shopping of varoius items...',
      release_date: new Date('2024-05-01'),
      version: 1,
      genre: 'Health',
      visibility: true,
      downloadCount: 200,
      comments: [
        {
          user_id: 'user2',
          app_id: 'app1',
          statement: 'Great app! Very useful.',
          averageRating: 4.5,
        },
        {
          user_id: 'user3',
          app_id: 'app1',
          statement: 'Could be improved.',
          averageRating: 3,
        },
      ],
      averageRating: 3.75,},
      { id:1,
        user_id: 'user1',
        app_name: 'Amazon',
        description: 'It is a website which is used for various purposes like shopping of varoius items...',
        release_date: new Date('2024-05-01'),
        version: 1,
        genre: 'Health',
        visibility: true,
        downloadCount: 200,
        comments: [
          {
            user_id: 'user2',
            app_id: 'app1',
            statement: 'Great app! Very useful.',
            averageRating: 4.5,
          },
          {
            user_id: 'user3',
            app_id: 'app1',
            statement: 'Could be improved.',
            averageRating: 3,
          },
        ],
        averageRating: 3.75,},
        { id:2,
          user_id: 'user3',
          app_name: 'Meesho',
          description: 'It is a website which is used for various purposes like shopping of varoius items...',
          release_date: new Date('2024-05-01'),
          version: 1,
          genre: 'Health',
          visibility: true,
          downloadCount: 200,
          comments: [
            {
              user_id: 'user2',
              app_id: 'app1',
              statement: 'Great app! Very useful.',
              averageRating: 4.5,
            },
            {
              user_id: 'user3',
              app_id: 'app1',
              statement: 'Could be improved.',
              averageRating: 3,
            },
          ],
          averageRating: 3.75,},
          {id:4,
            user_id: 'user3',
            app_name: 'AJIO',
            description: 'It is a website which is used for various purposes like shopping of varoius items...',
            release_date: new Date('2024-05-01'),
            version: 1,
            genre: 'Health',
            visibility: true,
            downloadCount: 200,
            comments: [
              {
                user_id: 'user2',
                app_id: 'app1',
                statement: 'Great app! Very useful.',
                averageRating: 4.5,
              },
              {
                user_id: 'user3',
                app_id: 'app1',
                statement: 'Could be improved.',
                averageRating: 3,
              },
            ],
            averageRating: 3.75,}

  ]
  return {myApplication}
 }
 getId<T extends ApplicationInterface>(checkinglength: T[]): number {
  return Number(
    checkinglength.length > 0
      ? Math.max(...checkinglength.map(t => t.id ?? 0)) + 1
      : 1
  );
}

}
