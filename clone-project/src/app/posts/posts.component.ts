import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { Product } from '../product.model';
import { PostService } from '../services/post.service';
import { ProductService } from './productservice';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  name = 'Angular ' + VERSION.major;
  posts: any;
  products?: Product[];
  responsiveOptions: any;
  constructor() { 

	}



}
