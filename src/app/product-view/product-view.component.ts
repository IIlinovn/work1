import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(
    private productService: ProductService,
  ) { }

  product = {
    id: 0,
    title: '',
    desc: '',
  }

  ngOnInit() {
    this.productService
      .loadById(1)
      .subscribe( (item:any) => {
        this.product = item
      })
  }

}