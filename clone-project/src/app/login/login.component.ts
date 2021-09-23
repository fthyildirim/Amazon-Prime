import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }


  get jsonProduct(){
    return JSON.stringify(this.newProduct)
  }
  addProduct(p: Product | any){
    console.log("New Product:"+ this.jsonProduct)
  }

  color: string ="blue"
}
