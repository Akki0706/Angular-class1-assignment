import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ClothesInterface } from './clothes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-clothes',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,NgFor],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css'
})
export class ClothesComponent {
  clothingItems: ClothesInterface[] = [
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FTACVASEN-Jackets-Long-Classic-Windbreaker-Softshell%2Fdp%2FB07VPHP9V5&psig=AOvVaw0LDamx7oOde8hxfszaGMlR&ust=1718775658278000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjkpLe45IYDFQAAAAAdAAAAABAE',
      name: 'Stylish Jacket',
      size: 'M',
      color: 'Black',
      price: 99.99
    },
    {
      img: 'https://example.com/clothing-item2.jpg',
      name: 'Casual Shirt',
      size: 'L',
      color: 'White',
      price: 49.99
    },
    {
      img: 'https://example.com/clothing-item3.jpg',
      name: 'Jeans',
      size: '32',
      color: 'Blue',
      price: 79.99
    }
  ];

}
