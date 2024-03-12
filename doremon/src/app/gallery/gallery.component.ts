import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { gallery } from './gallery';
import { GalleryserviceService } from '../galleryservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images?:gallery[];
  constructor(private galleryservice:GalleryserviceService,private location:Location){}
  ngOnInit(){
    this.getimages();
  }
  getimages(){
    this.galleryservice.getimages().subscribe(img=>this.images=img);
  }
  goback(){
    this.location.back();
  }
}
