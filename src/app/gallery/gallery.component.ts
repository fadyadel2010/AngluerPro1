import { Component } from '@angular/core';
import { products } from '../InterFace/ProductInteerFace';
import { RecommendProComponent } from "../recommend-pro/recommend-pro.component";


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendProComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  producltlist: products[] = 
  [
    {name : "hp" , price : 3500 , category : "LapTop" , img : "assets/img/laptop.jpg" } ,
    {name : "Android" , price : 5200 , category : "Mobile" , img : "assets/img/mobile.png" } ,
    {name : "Samsung" , price : 7500 , category : "Tv" , img : "assets/img/tv.jpg" } ,
    {name : "Oppo" , price : 3450 , category : "Tablet" , img : "assets/img/tablet.jpg" } ,
    {name : "Apple" , price : 9000 , category : "EarPod" , img : "assets/img/earpod.jpg" } ,
    {name : "Toshiba" , price : 7300 , category : "Washing" , img : "assets/img/washingmashine.png" }
  ]

}
