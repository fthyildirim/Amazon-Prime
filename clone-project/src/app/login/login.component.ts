import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: ProductRepository = new ProductRepository();
  newProduct: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }


  get jsonProduct(){
    return JSON.stringify(this.newProduct)
  }
  addProduct(p: Product | any){
    console.log("New Product:"+ this.jsonProduct)
  }

  color: string ="blue"
}
