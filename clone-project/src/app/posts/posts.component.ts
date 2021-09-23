import {Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Card } from './card.blueprint';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

})
export class PostsComponent   {
 
  @Input()
  cards: any[] = [];
  @Input()
  title?: string;

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 6
      }
    },
  }


}
