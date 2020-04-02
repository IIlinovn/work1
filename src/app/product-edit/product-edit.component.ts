import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  product: Product

  ngOnInit() {
    this.productService
      .loadById(1)
      .subscribe( (product:Product) => this.product = product)
  }

  updateProduct() {
    this.productService.update(this.product).subscribe()
  }

}
