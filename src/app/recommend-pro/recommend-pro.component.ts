import { Component } from '@angular/core';
import { products } from '../InterFace/ProductInteerFace';

@Component({
  selector: 'app-recommend-pro',
  standalone: true,
  imports: [],
  templateUrl: './recommend-pro.component.html',
  styleUrl: './recommend-pro.component.css'
})
export class RecommendProComponent {

  recomendedList: products[] =
  [
    {name : "Dell" , category : "Laptop" , price : 4360 , img : "assets/img/laptop.jpg"} ,
    {name : "Nokis" , price : 5200 , category : "Mobile" , img : "assets/img/mobile.png" } ,
    {name : "LG" , price : 7500 , category : "Tv" , img : "assets/img/tv.jpg" } ,
    {name : "Realme" , price : 3450 , category : "Tablet" , img : "assets/img/tablet.jpg" } ,
    {name : "Huwei" , price : 9000 , category : "EarPod" , img : "assets/img/earpod.jpg" } ,
    {name : "Keriazi" , price : 7300 , category : "Washing" , img : "assets/img/washingmashine.png" }
  ]

}
