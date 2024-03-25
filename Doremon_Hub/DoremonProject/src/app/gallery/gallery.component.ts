import { Component } from '@angular/core';
import { MainServicesService } from '../main-services.service';
import { NgIf,NgFor, NgIfContext } from '@angular/common';
import { gallery } from '../InterfaceInfo';
import { Location } from '@angular/common';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private mainservice:MainServicesService,private location:Location){}
  list?:gallery[];
  getGallery(){
    this.mainservice.getgallery().subscribe(l=>this.list=l);
  }
  ngOnInit(){
    this.getGallery();
  }
  goback(){
    this.location.back();
  }
}
